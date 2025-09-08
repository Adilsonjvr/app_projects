# TranscriVA Skeleton Server

This repository contains a minimal Node.js HTTP server that outlines the
transcription workflow described in the PRD. The `/transcribe` endpoint accepts a JSON body with an `audio_url` field and returns a placeholder transcription. A `/health` endpoint is also provided for basic uptime checks.

## Running locally

```bash
npm start
```

## Testing

```bash
npm test
```
