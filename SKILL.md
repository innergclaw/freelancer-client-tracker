---
name: freelancer-client-tracker
description: Track freelance clients, projects, payments, and demo leads. Use when managing client work, tracking project stages (Paid → In Review → Design → Review → Launch), logging revenue, managing pending payments, or organizing demo leads for potential clients. Ideal for web designers, developers, and creative freelancers who need simple CRM without paid software.
---

# Freelancer Client Tracker

Track clients, projects, payments, and demo leads — all in one place.

## Quick Start

### View Dashboard
Open your client dashboard:
```bash
open ~/.openclaw/workspace/projects/ownyourweb-dashboard/index.html
```

### Add New Client
```javascript
// Add to clients array in dashboard
{
  id: 'client_005',
  name: 'Client Name',
  email: 'client@email.com',
  project: 'Project Description',
  amount: 299,
  stage: 1, // 1=Paid, 2=In Review, 3=Design, 4=Review, 5=Launch
  createdAt: '2026-03-16',
  confirmationSent: true,
  notes: 'Any special notes',
  checklist: {
    domainAccess: false,
    contentProvided: false,
    imagesProvided: false,
    hostingPrefs: false,
    designPreferences: false
  }
}
```

### Add Demo Lead
```javascript
// Add to demoLeads array in dashboard
{
  id: 'demo_004',
  business: 'Business Name',
  project: 'Landing Page Demo',
  contact: 'email@business.com or Phone: 555-555-5555',
  status: 'building', // awaiting, building, interested, declined
  charge: 125,
  createdAt: '2026-03-16',
  notes: 'Any notes about the lead'
}
```

## Project Stages

| Stage | Number | Description |
|-------|--------|-------------|
| Paid | 1 | Payment received, ready to start |
| In Review | 2 | Requirements gathered, proposal sent |
| Design | 3 | Active development/design work |
| Review | 4 | Client reviewing work |
| Launch | 5 | Site live, project complete |

## Demo Lead Status

| Status | Meaning |
|--------|---------|
| awaiting | Reached out, waiting for response |
| building | Creating demo site |
| interested | Client wants to proceed |
| declined | Client passed |

## Checklist Items

Track what's needed from clients:
- `domainAccess` — Login credentials or transfer
- `contentProvided` — Text, copy, bios
- `imagesProvided` — Photos, logos, graphics
- `hostingPrefs` — Hosting preferences
- `designPreferences` — Style preferences, examples

## Revenue Tracking

Dashboard auto-calculates:
- **Active Projects:** Total paid clients
- **Pending Revenue:** Unpaid invoices
- **Demo Pipeline:** Potential revenue from leads

## File Locations

| File | Purpose |
|------|---------|
| `dashboard.html` | Main client dashboard |
| `stripe-monitor.log` | Payment notifications |
| `memory/2026-03-16.md` | Daily activity logs |

## Email Templates

See [references/templates.md](references/templates.md) for client communication templates.

## Workflow Guide

See [references/workflow.md](references/workflow.md) for step-by-step client management process.

## Integration

### Stripe Payments
Payments auto-appear via webhook. Set up:
```bash
# Start payment monitor
cd ~/.openclaw/workspace/scripts
node stripe-monitor-daemon.js
```

### Telegram Alerts
Configure in `stripe-monitor-daemon.js`:
```javascript
const TELEGRAM_CHAT_IDS = ['YOUR_CHAT_ID', 'SECOND_CHAT_ID'];
```

## Tips

1. **Update daily** — Keep checklist items current
2. **Log notes** — Document client requests immediately
3. **Track time** — Add createdAt for accurate reports
4. **Demo strategy** — Build demos for high-potential leads

## Example Commands

```bash
# View today's log
cat ~/.openclaw/workspace/memory/$(date +%Y-%m-%d).md

# Check monitor status
ps aux | grep stripe-monitor

# View recent payments
tail ~/.openclaw/workspace/scripts/stripe-monitor.log
```
