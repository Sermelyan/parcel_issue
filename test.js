let perf_hooks;
let timers;

try {
  perf_hooks = require("perf_hooks");
  timers = require("timers/promises");
} catch {}

console.log(perf_hooks);
