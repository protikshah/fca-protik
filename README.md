<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,50:7c3aed,100:ec4899&height=220&section=header&text=FCA-PROTIK&fontSize=72&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Stable%20Facebook%20Messenger%20API%20for%20Node.js&descAlignY=60&descSize=18" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&duration=2800&pause=900&color=A78BFA&center=true&vCenter=true&width=700&lines=⚡+Fast+%26+Lightweight+Messenger+API;🛡️+Session+Protection+%26+Auto+Reconnect;🚫+E2EE+Removed+for+Maximum+Stability;🌐+90%2B+API+Methods;🚀+Built+by+protik+for+Real+Bots" />

<br/>

[![npm](https://img.shields.io/badge/npm-fca--protik-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/fca-protik)
[![Node](https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Author](https://img.shields.io/badge/Author-protik-7c3aed?style=for-the-badge&logo=github)](https://github.com/protik)

**Created & maintained by [protik](https://github.com/protik)**

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
> Normal Messenger chats & groups work fully. Connection is more stable and lighter on resources.

---

## 📦 Installation

```bash
npm install fca-protik
```

**Requirements:** Node.js `>= 18.0.0`

```bash
node -v
```

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

    console.log("╭─────────────────────────────╮");
    console.log("│   🚀 FCA-PROTIK CONNECTED   │");
    console.log("│      by protik ⚡           │");
    console.log("╰─────────────────────────────╯");

    // Auto-save session every 3 minutes
    if (api.autoSaveSession) {
      api.autoSaveSession("./account.json", {
        interval: 3 * 60 * 1000,
        backup: true
      });
    }

    api.listenMqtt((err, event) => {
      if (err) {
        console.error("Listen error:", err);
        return;
      }

      if (event.type === "message" && event.body) {
        api.sendMessage("🤖 Received: " + event.body, event.threadID);
      }
    });
  }
);
```

---

## 🔐 Session Protection

```javascript
api.autoSaveSession("./account.json");

api.autoSaveSession("./account.json", {
  interval: 5 * 60 * 1000,
  debounce: 30 * 1000,
  backup: true,
  maxBackups: 5
});

api.saveSession();
api.restoreFromBackup();
api.stopAutoSave();
```

---

## 💬 Messaging Examples

```javascript
// Simple text
api.sendMessage("Hello from protik!", threadID);

// Reply
api.sendMessage({ body: "Reply text", replyTo: messageID }, threadID);

// Reaction
api.setMessageReaction("❤️", messageID, threadID);

// Typing indicator
api.sendTypingIndicator(threadID);
```

---

## 👥 Group Helpers

```javascript
api.addUserToGroup(userID, threadID);
api.removeUserFromGroup(userID, threadID);
api.changeAdminStatus(threadID, userID, true);
api.changeNickname("New Nick", threadID, userID);
api.setTitle("Group Name", threadID);
api.createPoll("Question?", ["A", "B"], threadID);
```

---

## ⚙️ Login Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `listenEvents` | boolean | `false` | Listen to events |
| `selfListen` | boolean | `false` | Receive own messages |
| `autoMarkRead` | boolean | `false` | Mark as read |
| `autoReconnect` | boolean | `true` | Reconnect on drop |
| `online` | boolean | `true` | Show online |
| `userAgent` | string | browser UA | Custom User-Agent |
| `proxy` | string | — | HTTP/HTTPS proxy |

---

## 🚫 Why E2EE was removed?

E2EE (Secret Conversations) adds:
- Extra Noise WebSocket connection
- Signal Protocol crypto + device registration
- Frequent CAT token / ICDC failures
- Higher CPU & reconnect spam

Most bots only need **normal chats & groups**.  
Removing E2EE makes the library **lighter, faster, and more stable**.

If you need Secret Chat support, use a different FCA build that still includes E2EE.

---

## 📋 Changelog (this build)

- **v6.7.4** (by protik)
  - ❌ Completely removed E2EE / Secret Conversation stack
  - 🧹 Removed `@signalapp/libsignal-client` dependency
  - 🛡️ Kept session protection, MQTT listen, messaging & group APIs
  - 📝 README redesigned under **protik** branding

---

## 🤝 Credits

| Role | Name |
|------|------|
| **Author / Maintainer** | **protik** |
| Base lineage | fca-nx / DongDev community |

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<div align="center">

**Built with ⚡ by [protik](https://github.com/protik)**

⭐ Star the repo if FCA-PROTIK helps your bot!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:ec4899,50:7c3aed,100:0f172a&height=120&section=footer" width="100%"/>

</div>
