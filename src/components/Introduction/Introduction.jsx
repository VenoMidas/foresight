import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Introduction = () => {
    const history = useHistory();
    const [introductionQuestions, setIntroductionQuestions] = useState([])

    useEffect(() => {
        getIntroductionQuestions();
    }, []);

    const getIntroductionQuestions = () => {
        // console.log('In getIntroductionQuestions');
        axios.get('/api/question/introduction')
            .then((response) => {
                setIntroductionQuestions(response.data);
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong.')
            });
    };

    return (
        <center>
            <Box>
                <ProgressBar step={1} />
                <h2>Introduction</h2>
                {introductionQuestions.map(question => {
                    return (
                        <div>
                            <h4>{question.question}</h4>
                            <TextField></TextField>
                        </div>
                    )
                })}
                <Button onClick={() => history.push('/start')}>Cancel</Button>
                <Button onClick={() => history.push('/team')}>Continue</Button>
            </Box>
        </center>
    )
}

export default Introduction;