# Freelancer Client Tracker

> Lightweight client management for freelancers — track projects, payments, demo leads, and revenue without expensive CRM software.

![Dashboard Preview](assets/dashboard-preview.png)

---

## ⚡ Quick Start (2 Minutes)

### Step 1: Install

```bash
# Clone to your OpenClaw skills folder
cd ~/.openclaw/skills/
git clone https://github.com/innergclaw/freelancer-client-tracker.git
```

### Step 2: Set Up Dashboard

```bash
# Create your dashboard directory
mkdir -p ~/.openclaw/workspace/projects/my-dashboard/

# Copy the template
cp ~/.openclaw/skills/freelancer-client-tracker/dashboard-template.html \
   ~/.openclaw/workspace/projects/my-dashboard/index.html

# Open it
open ~/.openclaw/workspace/projects/my-dashboard/index.html
```

### Step 3: Start Tracking

Add your first client by editing `index.html`:

```javascript
{
  "id": "client_001",
  "name": "Jane Smith",
  "email": "jane@business.com",
  "project": "Restaurant Website",
  "amount": 499,
  "stage": 1,
  "createdAt": "2026-03-17",
  "confirmationSent": true,
  "checklist": {
    "domainAccess": false,
    "contentProvided": false,
    "imagesProvided": false,
    "hostingPrefs": false,
    "designPreferences": false
  },
  "notes": "Wants booking system integrated"
}
```

---

## 📊 Features

| Feature | What It Does |
|---------|-------------|
| **Visual Dashboard** | Track all clients in one clean interface |
| **Revenue Tracking** | Auto-calculate totals by project stage |
| **Demo Lead Pipeline** | Manage potential clients and outreach |
| **Stripe Integration** | Get Telegram alerts for new payments |
| **Email Templates** | Ready-to-use client communication |
| **5-Stage Workflow** | Paid → In Review → Design → Review → Launch |

---

## 🚀 Project Stages

| Stage | Icon | Description |
|-------|------|-------------|
| **1 - Paid** | 🔒 | Payment received, ready to start |
| **2 - In Review** | 📋 | Requirements gathered |
| **3 - Design** | 🎨 | Active development |
| **4 - Review** | 👁 | Client reviewing work |
| **5 - Launch** | 🚀 | Site live, complete |

---

## 💰 Revenue Commands

### View Dashboard
```bash
open ~/.openclaw/workspace/projects/my-dashboard/index.html
```

### Add Client (Quick)
Edit `index.html` and add to the `clients` array.

### Check Stripe Payments
```bash
cd ~/.openclaw/workspace/scripts
tail -20 stripe-monitor.log
```

---

## 🔔 Stripe + Telegram Setup (Optional)

### 1. Configure Monitor

```bash
nano ~/.openclaw/skills/freelancer-client-tracker/stripe-monitor-config.json
```

Paste your credentials:
```json
{
  "stripeSecretKey": "sk_live_YOUR_STRIPE_KEY",
  "telegramBotToken": "YOUR_BOT_TOKEN",
  "telegramChatId": "YOUR_CHAT_ID",
  "pollIntervalMs": 60000
}
```

### 2. Start Monitoring

```bash
cd ~/.openclaw/workspace/scripts
node stripe-monitor-daemon.js
```

You'll get Telegram alerts like:
```
🎉 NEW PAYMENT: Jane Smith - $499.00
```

---

## 🎯 Demo Lead Tracking

Track potential clients who haven't paid yet:

```javascript
{
  "id": "demo_001",
  "business": "Ms. Minnie's Kitchen",
  "project": "Catering Website",
  "contact": "msminnie@email.com",
  "status": "building", // awaiting | building | interested | declined
  "charge": 999,
  "createdAt": "2026-03-17",
  "notes": "Demo site: https://your-demo-link.com"
}
```

---

## 📧 Email Templates

Copy-paste templates from `references/templates.md`:

### Initial Contact
```
Hi [Name],

I saw your business and thought you could benefit from a professional website...
```

### Project Complete
```
Hi [Name],

Your site is live! Here's everything you need to know...
```

---

## 🛠️ Troubleshooting

### Dashboard won't open?
```bash
# Check if file exists
ls ~/.openclaw/workspace/projects/my-dashboard/index.html

# If not, re-copy template
cp ~/.openclaw/skills/freelancer-client-tracker/dashboard-template.html \
   ~/.openclaw/workspace/projects/my-dashboard/index.html
```

### Stripe monitor not working?
```bash
# Check if running
ps aux | grep stripe-monitor

# Restart it
cd ~/.openclaw/workspace/scripts
node stripe-monitor-daemon.js
```

### Telegram not receiving alerts?
- Verify bot token is correct
- Check chat ID is correct (use @userinfobot to get it)
- Make sure you started a conversation with the bot

---

## 📁 File Structure

```
~/.openclaw/skills/freelancer-client-tracker/
├── SKILL.md                    # This skill documentation
├── README.md                   # This file
├── dashboard-template.html     # Copy this to your workspace
├── stripe-monitor-daemon.js    # Payment monitoring
├── stripe-monitor-config.json  # Your API keys
├── references/
│   ├── templates.md           # Email templates
│   └── workflow.md            # Process guide
└── assets/
    └── dashboard-preview.png  # Screenshot
```

---

## 🎨 Customization

### Change Colors
Edit `index.html` CSS:
```css
:root {
  --primary: #00D1C7;    /* Your brand color */
  --bg: #0a0a0b;         /* Background */
  --text: #e8e8e8;       /* Text color */
}
```

### Change Currency
Find/replace `$` with `€` or `£` in `index.html`.

### Add Custom Fields
Edit the client object structure in `index.html` to track whatever you need.

---

## 💡 Pro Tips

1. **Update daily** — Keep checklist items current
2. **Log notes immediately** — Don't rely on memory
3. **Build demos for warm leads** — Increases conversion
4. **Stage 2 = Proposal sent** — Track your win rate
5. **Use templates** — Save time on repetitive emails

---

## 📊 Example Dashboard View

```
📊 REVENUE OVERVIEW
==================
Active Projects: 4
Total Revenue: $1,247
Pending: $399

CLIENTS
-------
🔒 Jane Smith        $499   (Paid)
📋 John Doe          $399   (In Review)
🎨 Alice Brown       $249   (Design)
🚀 Bob Wilson        $100   (Launch)

DEMO LEADS
----------
building → Ms. Minnie's Kitchen     $999
awaiting → Blessed by Bri          $499
```

---

## 🤝 Contributing

Fork the repo, make changes, submit a PR:

```bash
git clone https://github.com/innergclaw/freelancer-client-tracker.git
cd freelancer-client-tracker
git checkout -b my-feature
# Make changes
git commit -m "Add feature"
git push origin my-feature
```

---

## 📜 License

MIT — Free to use and modify.

---

## 🏆 Created By

**InnerG Intel** — Built for freelancers who want simple, effective client management without the bloat.

Questions? Open an issue on [GitHub](https://github.com/innergclaw/freelancer-client-tracker).
