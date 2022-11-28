import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Team = () => {
    const history = useHistory();
    const [teamQuestions, setTeamQuestions] = useState([]);
    const [teamQuestionChoices, setTeamQuestionChoices] = useState([]);
    const [response, setResponse] = useState('');

    const sectionId = 2;
    const [low, setLow] = useState(6);
    const [high, setHigh] = useState(15);

    useEffect(() => {
        getTeamQuestions();
    }, []);

    // Get team section questions
    const getTeamQuestions = () => {
        // console.log('In getTeamQuestions');
        axios.get(`/api/question/${sectionId}`)
            .then((response) => {
                setTeamQuestions(response.data);
                getTeamQuestionChoices();
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong.');
            });
    };

    // Get the team section choices
    const getTeamQuestionChoices = () => {
        axios.get(`/api/choice/${low}/${high}`)
            .then((response) => {
                setTeamQuestionChoices(response.data);
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong.');
            });
    };




    return (
        <center>
            <Box>
                <ProgressBar step={2} />
                <h2>Team</h2>
                {teamQuestions.map(question => {
                    let choiceCheck = false;
                    for (let i = 0; i < teamQuestionChoices.length; i++) {
                        if (question.id === teamQuestionChoices[i].question_id) {
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
                                    {teamQuestionChoices.map(choice => {
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
                <Button onClick={() => history.push('/introduction')}>Back</Button>
                <Button onClick={() => history.push('/business/model')}>Continue</Button>
            </Box>
        </center>
    )
}

export default Team;