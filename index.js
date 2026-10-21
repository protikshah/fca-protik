"use strict";

const login = require("./module/login");

// CommonJS default export — classic FCA / GoatBot compatible
module.exports = login;
module.exports.login = login;
module.exports.default = login;

// Optional advanced exports (only if present)
try {
  const { createFcaClient } = require("./src/app/createFcaClient");
  const { MessengerBot, createMessengerBot } = require("./src/app/MessengerBot");
  const { MessengerContext } = require("./src/app/MessengerContext");
  const { attachThreadInfoRealtimeSync, applyThreadInfoRealtimeEvent } = require("./src/app/threadInfoRealtimeSync");
  module.exports.createFcaClient = createFcaClient;
  module.exports.MessengerBot = MessengerBot;
  module.exports.createMessengerBot = createMessengerBot;
  module.exports.MessengerContext = MessengerContext;
  module.exports.attachThreadInfoRealtimeSync = attachThreadInfoRealtimeSync;
  module.exports.applyThreadInfoRealtimeEvent = applyThreadInfoRealtimeEvent;
} catch (_) {
  // src/app not present in this build — classic login() is enough for bots
}
