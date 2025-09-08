const http = require('node:http');

function createApp() {
  return http.createServer(async (req, res) => {
    if (req.method === 'POST' && req.url === '/transcribe') {
      let body = '';
      for await (const chunk of req) {
        body += chunk;
      }
      let data;
      try {
        data = JSON.parse(body);
      } catch {
        res.statusCode = 400;
        res.end('Invalid JSON');
        return;
      }
      const audioUrl = data && data.audio_url ? data.audio_url : 'unknown';
      const result = {
        text: `Transcription placeholder for ${audioUrl}`
      };
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result));
    } else if (req.method === 'GET' && req.url === '/health') {
      res.statusCode = 200;
      res.end('ok');
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  });
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createApp().listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = { createApp };
