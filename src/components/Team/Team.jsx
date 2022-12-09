import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Footer from '../Footer/Footer';


const Team = () => {
    const history = useHistory();
    const [teamQuestions, setTeamQuestions] = useState([]);
    const [teamQuestionChoices, setTeamQuestionChoices] = useState([]);
    const [responseList, setResponseList] = useState([]);
    const user = useSelector((store) => store.user);

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
                handleResponseList(response.data);
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

    // This could be moved to the server down the road
    const handleResponseList = (questionObjectArray) => {
        // call response list outside of loop
        const responseListCopy = [...responseList];
        for (let i = 0; i < questionObjectArray.length; i += 1) {
            responseListCopy.push({ question_id: questionObjectArray[i].id, response: '' })
        }
        setResponseList(responseListCopy);
    };

    // handleChange
    const handleResponseListChange = (event, index) => {
        console.log('on change event', event.target.name);
        const { name, value } = event.target;
        const responseListCopy = [...responseList];
        responseListCopy[name].response = value;
        setResponseList(responseListCopy);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit');
        axios.post(`/api/response/${user.id}`, { data: responseList })
            .then(() => {
                history.push('/business/model')
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong!');
            });
    };



    return (
        <div className='container'>
            <center>
                <Box>
                    <ProgressBar step={2} />
                    <br />
                    <h1 sx={{ color: '#0c3d50' }}>#Team</h1>
                    <form onSubmit={handleSubmit}>
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
                                            name={question.id - 6}
                                            value={responseList[question.id - 6].response}
                                            onChange={handleResponseListChange}
                                        >
                                            {teamQuestionChoices.map(choice => {
                                                if (choice.question_id === question.id) {
                                                    return (
                                                        <MenuItem value={choice.choice}>{choice.choice}</MenuItem>
                                                    )
                                                }
                                            })}
                                        </Select>
                                        :
                                        <TextField
                                            name={question.id - 6}
                                            onChange={handleResponseListChange}
                                        >
                                        </TextField>}
                                </>
                            )
                        })}
                        <br />
                        <br />
                        <Button onClick={() => history.push('/introduction')} color="error">Back</Button>
                        <Button type="submit" style={{ color: '#0c3d50' }}>Continue</Button>
                    </form>
                </Box>
                <br />
                <br />
                <Footer />
            </center>
        </div>
    )
}

export default Team;