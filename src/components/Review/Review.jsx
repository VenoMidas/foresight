import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Footer from '../Footer/Footer';

const Review = () => {
    const history = useHistory();
    // useSelectors here

    return (
        <div className='container'>
            <center>
                <Box>
                    <ProgressBar step={6} />
                    <br />
                    <br />
                    <h1 sx={{ color: '#0c3d50' }}>#Submit to view your dashboard!</h1>
                    <p>After submitting your form, you will have access to your new account.</p>
                    <Button onClick={() => history.push('/ip/legal')} color="error">Back</Button>
                    <Button onClick={() => history.push('/founder/profile/:id')} style={{ color: '#0c3d50' }}>Submit</Button>
                </Box>
                <br />
                <br />
                <Footer />
            </center>
        </div>
    )
}

export default Review;