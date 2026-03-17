#!/usr/bin/env node
/**
 * Add a new client to the freelancer tracker
 * Usage: node add-client.js "Client Name" "client@email.com" "Project Description" 299
 */

const fs = require('fs');
const path = require('path');

const DASHBOARD_PATH = process.env.CLIENT_DASHBOARD || 
  path.join(process.env.HOME, '.openclaw/workspace/projects/ownyourweb-dashboard/index.html');

function generateId() {
  return 'client_' + Date.now().toString(36);
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function addClient(name, email, project, amount) {
  if (!name || !email || !project || !amount) {
    console.log('Usage: node add-client.js "Name" "email" "Project" amount');
    console.log('Example: node add-client.js "John Doe" "john@email.com" "Landing Page" 299');
    process.exit(1);
  }

  const newClient = {
    id: generateId(),
    name: name,
    email: email,
    project: project,
    amount: parseInt(amount),
    stage: 1,
    createdAt: getToday(),
    confirmationSent: false,
    notes: 'New client added via CLI',
    checklist: {
      domainAccess: false,
      contentProvided: false,
      imagesProvided: false,
      hostingPrefs: false,
      designPreferences: false
    }
  };

  console.log('\n✅ New Client Created:');
  console.log(JSON.stringify(newClient, null, 2));
  console.log('\n📋 Add this to your dashboard clients array.');
  console.log(`🌐 Dashboard: ${DASHBOARD_PATH}`);
}

// Get arguments
const [,, name, email, project, amount] = process.argv;
addClient(name, email, project, amount);
