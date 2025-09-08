const test = require('node:test');
const assert = require('node:assert');
const { createApp } = require('../src/server');

const fetch = global.fetch;

test('GET /health returns ok', async () => {
  const server = createApp().listen(0);
  const port = server.address().port;
  const res = await fetch(`http://localhost:${port}/health`);
  const text = await res.text();
  assert.strictEqual(res.status, 200);
  assert.strictEqual(text, 'ok');
  server.close();
});

