import React from 'react';
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { speechToText } from "../redux/actions"
import { getText } from "../redux/selectors"

const SpeechCard = ({ text, speechToText }) => {
    return (
        <Card className="w5 tc ma2">
            <div className="flex ma2">
                <IconButton
                    color="primary"
                    aria-label="speech to text"
                //onClick= make api call to listen to speech..
                // api returns text and adds it to state to be displayed
                >
                    <MicIcon />
                </IconButton>
                <div>
                    <Typography className="tl">
                        Text:
                    </Typography>
                    <Typography className="tl">
                        {text}
                    </Typography>
                </div>
            </div>
            <form id="answerForm" className="flex ma2">
                <div className="ma1">
                    <TextField
                        id="key-input"
                        label="Enter Text"
                        variant="outlined"
                    />
                </div>
                <div className="ma1">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            speechToText(document.getElementById('key-input').value); 
                            document.getElementById('key-input').value = "";
                        }}
                    >
                        Submit
                </Button>
                </div>
            </form>
        </Card>
    )
}

const mapStateToProps = state => {
    return { text: getText(state) }
}

export default connect(mapStateToProps, { speechToText })(SpeechCard);