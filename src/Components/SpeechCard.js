import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SpeechCard = () => {
    return (
        <Card className="w5 tc ma2">
            <div className="flex ma2">
                <IconButton
                    color="primary"
                    aria-label="speech to text"
                //onClick= make api call to listen to speech..
                // return text and adds it to state to be displayed
                >
                    <MicIcon />
                </IconButton>
                <div>
                    <Typography className="tl">
                        Text:
                    </Typography>
                    <Typography>
                        state text here
                    </Typography>
                </div>
            </div>
            <form className="flex ma2">
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
                //onClick=
                >
                    Submit
                </Button>
                </div>
            </form>
        </Card>
    )
}

export default SpeechCard;