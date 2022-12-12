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

const IPLegal = () => {
    const history = useHistory();
    const [ipLegalQuestions, setIpLegalQuestions] = useState([]);
    const [ipLegalQuestionChoices, setIpLegalQuestionChoices] = useState([]);
    const [responseList, setResponseList] = useState([]);
    const user = useSelector((store) => store.user);

    // Manually set section id on each page - could use section table on database to trigger in the future
    // Manually setting question range - should use math later
    const sectionId = 5;
    const [low, setLow] = useState(38);
    const [high, setHigh] = useState(43);

    useEffect(() => {
        getIpLegalQuestions();
    }, []);

    // Get the questions
    const getIpLegalQuestions = () => {
        // console.log('In getIpLegalQuestions');
        axios.get(`/api/question/${sectionId}`)
            .then((response) => {
                setIpLegalQuestions(response.data);
                handleResponseList(response.data);
                getIpLegalQuestionChoices();
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong.');
            });
    };

    // Get the choices
    const getIpLegalQuestionChoices = () => {
        axios.get(`/api/choice/${low}/${high}`)
            .then((response) => {
                setIpLegalQuestionChoices(response.data);
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
                history.push('/review')
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong!');
            });
    };

    return (
        <div className='container'>
            <center>
                <Box>
                    <ProgressBar step={5} />
                    <br />
                    <h1 sx={{ color: '#0c3d50' }}>#IP and Legal</h1>
                    <form onSubmit={handleSubmit}>
                        {ipLegalQuestions.map(question => {
                            // check if question.id matches a choice.question_id
                            let choiceCheck = false;
                            for (let i = 0; i < ipLegalQuestionChoices.length; i++) {
                                if (question.id === ipLegalQuestionChoices[i].question_id) {
                                    choiceCheck = true;
                                }
                            }
                            return (
                                <>
                                    <h4>{question.question}</h4>
                                    {choiceCheck ?
                                        <Select
                                            name={question.id - 38}
                                            value={responseList[question.id - 38].response}
                                            onChange={handleResponseListChange}
                                        >
                                            {ipLegalQuestionChoices.map(choice => {
                                                if (choice.question_id === question.id) {
                                                    return (
                                                        <MenuItem value={choice.choice}>{choice.choice}</MenuItem>
                                                    )
                                                }
                                            })}
                                        </Select>
                                        :
                                        <TextField
                                            name={question.id - 38}
                                            onChange={handleResponseListChange}
                                        >
                                        </TextField>}
                                </>
                            )
                        })}
                        <br />
                        <br />
                        <Button onClick={() => history.push('/product/market')} color="error">Back</Button>
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

export default IPLegal;
