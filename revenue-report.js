#!/usr/bin/env node
/**
 * Generate revenue report from dashboard
 * Usage: node revenue-report.js
 */

const fs = require('fs');
const path = require('path');

const DASHBOARD_PATH = process.env.CLIENT_DASHBOARD || 
  path.join(process.env.HOME, '.openclaw/workspace/projects/ownyourweb-dashboard/index.html');

function extractRevenueData() {
  try {
    const content = fs.readFileSync(DASHBOARD_PATH, 'utf8');
    
    // Extract clients array
    const clientsMatch = content.match(/const clients = (\[.*?\]);/s);
    if (!clientsMatch) {
      console.log('❌ Could not find clients data in dashboard');
      return;
    }

    // Safely evaluate the array
    const clients = eval(clientsMatch[1]);
    
    // Calculate stats
    const totalRevenue = clients.reduce((sum, c) => sum + c.amount, 0);
    const activeClients = clients.length;
    const byStage = {};
    
    clients.forEach(c => {
      const stageName = ['Pending', 'Paid', 'In Review', 'Design', 'Review', 'Launch'][c.stage] || 'Unknown';
      byStage[stageName] = (byStage[stageName] || 0) + 1;
    });

    console.log('\n📊 REVENUE REPORT');
    console.log('==================');
    console.log(`Total Clients: ${activeClients}`);
    console.log(`Total Revenue: $${totalRevenue.toLocaleString()}`);
    console.log('\nBy Stage:');
    Object.entries(byStage).forEach(([stage, count]) => {
      console.log(`  ${stage}: ${count}`);
    });
    console.log('\nClients:');
    clients.forEach(c => {
      const stage = ['Pending', 'Paid', 'In Review', 'Design', 'Review', 'Launch'][c.stage] || 'Unknown';
      console.log(`  • ${c.name} — $${c.amount} (${stage})`);
    });
    console.log('');

  } catch (e) {
    console.log('❌ Error reading dashboard:', e.message);
  }
}

extractRevenueData();
