# 💼 Freelancer Client Tracker

> A lightweight client management system for freelancers — track projects, payments, demo leads, and revenue without expensive CRM software.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![OpenClaw Skill](https://img.shields.io/badge/OpenClaw-Skill-blue.svg)](https://openclaw.ai)

![Dashboard Preview](https://via.placeholder.com/800x400/0a0a0b/00D1C7?text=Client+Dashboard+Preview)

*(Screenshot: Add your own by uploading `screenshot.png` to the repo)*

## ✨ Features

- 📊 **Visual Dashboard** — Track all clients in one clean interface
- 💰 **Revenue Tracking** — Auto-calculate totals by project stage
- 🎯 **Demo Lead Pipeline** — Manage potential clients and outreach
- 🔔 **Stripe Integration** — Get Telegram alerts for new payments
- 📧 **Email Templates** — Ready-to-use client communication
- 🚀 **5-Stage Workflow** — Paid → In Review → Design → Review → Launch

## 🚀 Quick Start

### 1. Clone & Setup

```bash
git clone https://github.com/innergclaw/freelancer-client-tracker.git
cd freelancer-client-tracker

# Copy dashboard to your workspace
cp dashboard-template.html ~/workspace/my-dashboard/index.html
```

### 2. Install for OpenClaw

```bash
# Copy skill to OpenClaw skills folder
cp -r . ~/.openclaw/skills/freelancer-client-tracker
```

### 3. Add Shortcuts (Optional)

Add to your `~/.zshrc` or `~/.bashrc`:

```bash
alias add-client='node ~/.openclaw/skills/freelancer-client-tracker/add-client.js'
alias revenue='node ~/.openclaw/skills/freelancer-client-tracker/revenue-report.js'
alias clients='open ~/workspace/my-dashboard/index.html'
```

Then reload:
```bash
source ~/.zshrc
```

### 4. Configure Stripe + Telegram (Optional)

Create `stripe-monitor-daemon.js`:

```javascript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
const TELEGRAM_CHAT_IDS = ['YOUR_CHAT_ID'];
const STRIPE_SECRET_KEY = 'sk_live_YOUR_KEY';
```

Start monitoring:
```bash
node stripe-monitor-daemon.js
```

## 📋 Usage

### Add a New Client

```bash
add-client "Jane Smith" "jane@business.com" "Restaurant Website" 499
```

Output:
```json
{
  "id": "client_abc123",
  "name": "Jane Smith",
  "email": "jane@business.com",
  "project": "Restaurant Website",
  "amount": 499,
  "stage": 1,
  "createdAt": "2026-03-16",
  ...
}
```

### View Revenue Report

```bash
revenue
```

Example Output:
```
📊 REVENUE REPORT
==================
Total Clients: 4
Total Revenue: $1,247

By Stage:
  Paid: 2
  In Review: 1
  Design: 1

Clients:
  • Jane Smith — $499 (Paid)
  • John Doe — $399 (In Review)
  • Alice Brown — $249 (Design)
  • Bob Wilson — $100 (Paid)
```

### Open Dashboard

```bash
clients
```

Opens your HTML dashboard in the browser.

## 🎯 Project Stages

| Stage | Number | Description |
|-------|--------|-------------|
| 🔒 Paid | 1 | Payment received, ready to start |
| 📋 In Review | 2 | Requirements gathered |
| 🎨 Design | 3 | Active development |
| 👁 Review | 4 | Client reviewing work |
| 🚀 Launch | 5 | Site live, complete |

## 📧 Email Templates

See [templates.md](templates.md) for:
- Initial contact (demo leads)
- Project started
- Materials request
- Ready for review
- Project complete
- Follow-up

## 📖 Workflow Guide

See [workflow.md](workflow.md) for:
- 5-stage process breakdown
- Daily habits
- Red flags to watch for
- Demo lead workflow

## 🎨 Customization

The dashboard is pure HTML/CSS/JS — customize freely:

```css
/* Change colors */
:root {
  --primary: #00D1C7;    /* Your brand color */
  --bg: #0a0a0b;         /* Background */
  --text: #e8e8e8;       /* Text color */
}

/* Change currency */
// Find/replace "$" with "€" or "£" in dashboard-template.html
```

## 🖥 Dashboard Preview

The dashboard includes:
- **Stats bar** — Active projects, revenue, pending
- **Stage legend** — Visual guide to project stages
- **Client cards** — Details, status, checklist
- **Demo leads section** — Track potential clients
- **Revenue tracking** — Pipeline overview

## 🤖 OpenClaw Integration

This skill triggers on phrases like:
- *"track my clients"*
- *"add new client"*
- *"view revenue"*
- *"send client email"*
- *"manage demo leads"*

## 📝 Real World Usage

Built for freelancers who want simple, effective client management without the bloat. Track:
- Active client projects
- Payment status & revenue
- Demo leads & pipeline
- Project deliverables

## 🛠 Tech Stack

- **Frontend:** Pure HTML/CSS/JS (no frameworks)
- **Backend:** Node.js scripts
- **Payments:** Stripe API
- **Notifications:** Telegram Bot API
- **Storage:** JSON files (no database needed)

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a PR

## 📄 License

MIT — Free to use and modify.

## 🙏 Credits

Created by [InnerG Intel](https://github.com/innergclaw)

Built for freelancers who want simple, effective client management without the bloat.

---

**Questions?** Open an issue on GitHub.
