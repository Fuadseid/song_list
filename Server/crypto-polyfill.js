// Fix for crypto in older Node.js environments
if (typeof globalThis.crypto === 'undefined') {
  const crypto = require('crypto');
  globalThis.crypto = crypto;
}