# Smallest.ai Hackathon Instructions - Waves Integration

Smallest.ai is sponsoring the hackathon with high-performance "Waves" streaming endpoints. To get the best results for your project, it is recommended to use these directly in addition to (or instead of) the standard Atoms widget.

## Available Streaming Endpoints

| Type | Endpoint | Protocol |
| :--- | :--- | :--- |
| **TTS (Text-to-Speech)** | `https://waves-api.smallest.ai/api/v1/lightning-v3.1/stream` | HTTP Stream |
| **TTS (Text-to-Speech)** | `wss://waves-api.smallest.ai/api/v1/lightning-v3.1/get_speech/stream` | WebSocket |
| **STT (Speech-to-Text)** | `https://waves-api.smallest.ai/api/v1/pulse/get_text` | HTTP Stream |
| **STT (Speech-to-Text)** | `wss://waves-api.smallest.ai/api/v1/pulse/get_text` | WebSocket |

## Implementation Strategy for Anchor

1. **API Key Setup**:
   - Log in to [console.smallest.ai](https://console.smallest.ai/)
   - Create an API Key.
   - Store it as `VITE_SMALLEST_AI_KEY` in your `.env` file (locally).

2. **Lowest Latency Voice**:
   - Use the `lightning-v3.1` model for text-to-speech. 
   - It is significantly faster than previous models and optimized for real-time conversation.

3. **Real-time Transcription**:
   - Use the `pulse` model for speech-to-text.
   - This allows Anchor to "listen" with near-zero latency, making the psychological safety coach feel more responsive.

## Quick Reference
For technical documentation, visit: [Waves API References](https://waves-docs.smallest.ai/v4.0.0/content/api-references/)
Ready-to-use cookbooks: [Smallest AI Cookbook](https://github.com/smallest-inc/cookbook)
