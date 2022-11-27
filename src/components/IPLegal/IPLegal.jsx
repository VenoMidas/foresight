import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const IPLegal = () => {
    const history = useHistory();
    const [ipLegalQuestions, setIpLegalQuestions] = useState([]);
    const [ipLegalQuestionChoices, setIpLegalQuestionChoices] = useState([]);
    const [response, setResponse] = useState('');

    const sectionId = 4;
    const [low, setLow] = useState(38);
    const [high, setHigh] = useState(43);



    return (
        <center>
            <Box>
                <ProgressBar step={5} />
                <h2>IP and Legal</h2>
                <p>Questions Here</p>
                <Button onClick={() => history.push('/product/market')}>Back</Button>
                <Button onClick={() => history.push('/review')}>Review</Button>
            </Box>
        </center>
    )
}

export default IPLegal;