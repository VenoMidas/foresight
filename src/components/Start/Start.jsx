import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Footer from '../Footer/Footer';

const Start = () => {
    const history = useHistory();

    return (
        <div className='container'>
            <center>
                <Box>
                    <h1 sx={{ color: '#0c3d50' }}>Welcome to #foresight</h1>
                    <p>Please fill out the following questionnaire</p>
                    <br />
                    <Button onClick={() => history.push('/introduction')} style={{ backgroundColor: '#1cefb9', color: '#0c3d50' }}>Start</Button>
                </Box>
                <br />
                <br />
                <Footer />
            </center>
        </div>
    )
}

export default Start;