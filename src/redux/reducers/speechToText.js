import { SPEECH_TO_TEXT } from "../actionTypes";

const initialState = {
    text: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SPEECH_TO_TEXT: {
            const { text } = action.payload;
            return {
                ...state,
                text: text
            }
        }
        default:
            return state;
    }
}
