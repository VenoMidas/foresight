import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const BusinessModel = () => {
    const history = useHistory();
    const [businessModelQuestions, setBusinessModelQuestions] = useState([]);
    const [businessModelQuestionChoices, setBusinessModelQuestionChoices] = useState([]);
    const [response, setResponse] = useState('');

    const sectionId = 3;
    const [low, setLow] = useState(16);
    const [high, setHigh] = useState(23);

    useEffect(() => {
        getBusinessModelQuestions();
    }, []);

    const getBusinessModelQuestions = () => {
        // console.log('In getBusinessModelQuestions');
        axios.get(`/api/question/${sectionId}`)
            .then((response) => {
                setBusinessModelQuestions(response.data);
                getBusinessModelQuestionChoices();
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong.');
            });
    };

    const getBusinessModelQuestionChoices = () => {
        axios.get(`/api/choice/${low}/${high}`)
            .then((response) => {
                setBusinessModelQuestionChoices(response.data);
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong.');
            });
    };



    return (
        <center>
            <Box>
                <ProgressBar step={3} />
                <h2>Business Model</h2>
                {businessModelQuestions.map(question => {
                    let choiceCheck = false;
                    for (let i = 0; i < businessModelQuestionChoices.length; i++) {
                        if (question.id === businessModelQuestionChoices[i].question_id) {
                            choiceCheck = true;
                        }
                    }
                    return (
                        <>
                            <h4>{question.question}</h4>
                            {choiceCheck ?
                                <Select
                                    value={response}
                                    onChange={(event) => setResponse(event.target.value)}
                                >
                                    {businessModelQuestionChoices.map(choice => {
                                        if (choice.question_id === question.id) {
                                            return (
                                                <MenuItem>
                                                    {choice.choice}
                                                </MenuItem>
                                            )
                                        }
                                    })}
                                </Select>
                                :
                                <TextField></TextField>}
                        </>
                    )
                })}
                <br />
                <Button onClick={() => history.push('/team')}>Back</Button>
                <Button onClick={() => history.push('/product/market')}>Continue</Button>
            </Box>
        </center>
    )
}

export default BusinessModel;