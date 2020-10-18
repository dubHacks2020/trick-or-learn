import { SPEECH_TO_TEXT } from "./actionTypes";

export const speechToText = text => ({
    type: SPEECH_TO_TEXT,
    payload: {
        text: text
    }
});