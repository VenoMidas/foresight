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

const ProductMarket = () => {
    const history = useHistory();
    const [productMarketQuestions, setProductMarketQuestions] = useState([]);
    const [productMarketQuestionChoices, setProductMarketQuestionChoices] = useState([]);
    const [responseList, setResponseList] = useState([]);
    const user = useSelector((store) => store.user);

    // Manually set section id on each page - could use section table on database to trigger in the future
    // Manually setting question range - should use math later
    const sectionId = 4;
    const [low, setLow] = useState(24);
    const [high, setHigh] = useState(37);

    useEffect(() => {
        getProductMarketQuestions();
    }, []);

    // Get the questions
    const getProductMarketQuestions = () => {
        // console.log('In getProductMarketQuestions');
        axios.get(`/api/question/${sectionId}`)
            .then((response) => {
                setProductMarketQuestions(response.data);
                handleResponseList(response.data);
                getProductMarketQuestionChoices();
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong.');
            });
    };

    // Get the choices
    const getProductMarketQuestionChoices = () => {
        axios.get(`/api/choice/${low}/${high}`)
            .then((response) => {
                setProductMarketQuestionChoices(response.data);
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
                history.push('/ip/legal')
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong!');
            });
    };
    console.log('response list', responseList)
    return (
        <div className='container'>
            <center>
                <Box>
                    <ProgressBar step={4} />
                    <br />
                    <h1 sx={{ color: '#0c3d50' }}>#Product Market</h1>
                    <form onSubmit={handleSubmit}>
                        {productMarketQuestions.map(question => {
                            // check if question.id matches a choice.question_id
                            let choiceCheck = false;
                            for (let i = 0; i < productMarketQuestionChoices.length; i++) {
                                if (question.id === productMarketQuestionChoices[i].question_id) {
                                    choiceCheck = true;
                                }
                            }
                            return (
                                <>
                                    <h4>{question.question}</h4>
                                    {choiceCheck ?
                                        <Select
                                            name={question.id - 24}
                                            value={responseList[question.id - 24].response}
                                            onChange={handleResponseListChange}
                                        >
                                            {productMarketQuestionChoices.map(choice => {
                                                if (choice.question_id === question.id) {
                                                    return (
                                                        <MenuItem value={choice.choice}>{choice.choice}</MenuItem>
                                                    )
                                                }
                                            })}
                                        </Select>
                                        :
                                        <TextField
                                            name={question.id - 24}
                                            onChange={handleResponseListChange}
                                        >
                                        </TextField>}
                                </>
                            )
                        })}
                        <br />
                        <br />
                        <Button onClick={() => history.push('/business/model')} color="error">Back</Button>
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

export default ProductMarket;