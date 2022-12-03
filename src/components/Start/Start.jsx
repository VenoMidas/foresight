import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Start = () => {
    const history = useHistory();

    return (
        <div className='container'>
        <center>
            <Box>
                <h2>Welcome to #foresight</h2>
                <p>Please fill out the following questionnaire</p>
                <Button onClick={() => history.push('/introduction')}>Start</Button>
            </Box>
        </center>
        </div>
    )
}

export default Start;