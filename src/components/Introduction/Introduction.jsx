import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Introduction = () => {
    const history = useHistory();

    return (
        <center>
            <Box>
                <ProgressBar step={1} />
                <h2>Introduction</h2>
                <p>Questions Here</p>
                <Button onClick={() => history.push('/start')}>Cancel</Button>
                <Button onClick={() => history.push('/team')}>Continue</Button>
            </Box>
        </center>
    )
}

export default Introduction;