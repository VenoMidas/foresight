import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

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
        // console.log('In getIntroductionQuestions');
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
                <p>Questions Here</p>
                <Button onClick={() => history.push('/introduction')}>Back</Button>
                <Button onClick={() => history.push('/business/model')}>Continue</Button>
            </Box>
        </center>
    )
}

export default Team;