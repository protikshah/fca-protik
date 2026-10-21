<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,50:7c3aed,100:ec4899&height=220&section=header&text=FCA-PROTIK&fontSize=72&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Stable%20Facebook%20Messenger%20API%20for%20Node.js&descAlignY=60&descSize=18" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&duration=2800&pause=900&color=A78BFA&center=true&vCenter=true&width=700&lines=⚡+Fast+%26+Lightweight+Messenger+API;🛡️+Session+Protection+%26+Auto+Reconnect;🚫+E2EE+Removed+for+Maximum+Stability;🌐+90%2B+API+Methods;🚀+Built+by+protik+for+Real+Bots" />

<br/>

[![npm](https://img.shields.io/badge/npm-fca--protik-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/fca-protik)
[![Node](https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Author](https://img.shields.io/badge/Author-protik-7c3aed?style=for-the-badge&logo=github)](https://github.com/protikshah)

**Created & maintained by [protik](https://github.com/protikshah)**

</div>

---

## ✨ Features

| Feature | Status | Notes |
|:---:|---|---|
| ⚡ **Fast MQTT Engine** | ✅ | Real-time message listening |
| 🛡️ **Session Protection** | ✅ | Auto-save + backup appState |
| 🔄 **Auto Reconnect** | ✅ | Survives disconnects |
| 💬 **Full Messaging API** | ✅ | send, edit, unsend, reaction, typing |
| 👥 **Group Tools** | ✅ | admin, nickname, theme, poll, etc. |
| 🌐 **90+ Methods** | ✅ | Threads, users, reactions, more |
| 🚫 **E2EE / Secret Chat** | ❌ **Removed** | Removed for stability & lower load |

> **Note:** This build intentionally **does not include E2EE** (Secret Conversations).  
> Normal Messenger chats & groups work fully. Connection is more stable and lighter.

---

## 📦 Installation

```bash
npm install fca-protik
# or from GitHub:
# npm install github:protikshah/fca-protik
```

**Requirements:** Node.js `>= 18.0.0`

---

## 🚀 Quick Start

```javascript
const { login } = require("fca-protik");
const appState = require("./account.json");

login(
  { appState },
  { listenEvents: true, autoReconnect: true },
  (err, api) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("🚀 FCA-PROTIK CONNECTED — by protik");

    if (api.autoSaveSession) {
      api.autoSaveSession("./account.json", {
        interval: 3 * 60 * 1000,
        backup: true
      });
    }

    api.listenMqtt((err, event) => {
      if (err) return console.error(err);
      if (event.type === "message" && event.body) {
        api.sendMessage("🤖 " + event.body, event.threadID);
      }
    });
  }
);
```

---

## 🚫 Why E2EE was removed?

E2EE adds Noise WebSocket, Signal crypto, CAT/ICDC tokens and frequent reconnect errors.  
Most bots only need normal chats & groups — this build is lighter and more stable.

---

## 📋 Changelog

- **v6.7.4** (by protik)
  - Full complete package (utils, listenMqtt, messaging, etc.)
  - E2EE / Secret Conversation stack removed
  - `@signalapp/libsignal-client` dependency removed
  - README under **protik** branding

---

## 🤝 Credits

| Role | Name |
|------|------|
| **Author / Maintainer** | **protik** |
| Base | fca-nx |

## 📄 License

MIT

<div align="center">

**Built with ⚡ by [protik](https://github.com/protikshah)**

</div>
