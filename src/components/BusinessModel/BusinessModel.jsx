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

const BusinessModel = () => {
    const history = useHistory();
    const [businessModelQuestions, setBusinessModelQuestions] = useState([]);
    const [businessModelQuestionChoices, setBusinessModelQuestionChoices] = useState([]);
    const [responseList, setResponseList] = useState([]);
    const user = useSelector((store) => store.user);

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
                handleResponseList(response.data);
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
                history.push('/product/market')
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong!');
            });
    };



    return (
        <div className='container'>
            <center>
                <Box>
                    <ProgressBar step={3} />
                    <br />
                    <h1 sx={{ color: '#0c3d50' }}>#Business Model</h1>
                    <form onSubmit={handleSubmit}>
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
                                            name={question.id - 16}
                                            value={responseList[question.id - 16].response}
                                            onChange={handleResponseListChange}
                                        >
                                            {businessModelQuestionChoices.map(choice => {
                                                if (choice.question_id === question.id) {
                                                    return (
                                                        <MenuItem value={choice.choice}>{choice.choice}</MenuItem>
                                                    )
                                                }
                                            })}
                                        </Select>
                                        :
                                        <TextField
                                            name={question.id - 16}
                                            onChange={handleResponseListChange}
                                        >
                                        </TextField>}
                                </>
                            )
                        })}
                        <br />
                        <br />
                        <Button onClick={() => history.push('/team')} color="error">Back</Button>
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

export default BusinessModel;