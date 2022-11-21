import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Team = () => {
    const history = useHistory();

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