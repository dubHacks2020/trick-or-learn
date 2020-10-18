import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { speechToText } from "../redux/actions"
import { getText } from "../redux/selectors"

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'fr-FR'

const SpeechCard = ({ text, speechToText }) => {
    const [isListening, setIsListening] = useState(false)

    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleListen = () => {
        if (isListening) {
          mic.start()
          mic.onend = () => {
            console.log('continue..')
            mic.start()
          }
        } else {
          mic.stop()
          mic.onend = () => {
            console.log('Stopped Mic on Click')
          }
        }
        mic.onstart = () => {
          console.log('Mics on')
        }
    
        mic.onresult = event => {
          const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
          console.log(transcript)
          speechToText(transcript)
          mic.onerror = event => {
            console.log(event.error)
          }
        }
      }

    return (
        <Card className="w5 tc ma2">
            <div className="flex ma2">
                <IconButton
                    color="primary"
                    aria-label="speech to text"
                    onClick={() => setIsListening(prevState => !prevState)}
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