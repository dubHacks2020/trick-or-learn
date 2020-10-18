// Imports the Google Cloud client library
// const fs = require('fs');
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

//
const filename = 'l\'informatique.wav';
const encoding = 'LINEAR16';
const sampleRateHertz = 48000;
const languageCode = 'fr-FR';
// fr-FR

const config = {
  encoding: encoding,
  sampleRateHertz: sampleRateHertz,
  languageCode: languageCode,
};
const audio = {
  content: fs.readFileSync(filename).toString('base64'),
};

const request = {
  config: config,
  audio: audio,
};

// Detects speech in the audio file
async function main() {
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log('Transcription: ', transcription);
}

main().catch(console.error);