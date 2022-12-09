import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
                    <h2>Click "Submit" to complete your form!</h2>
                    <Button onClick={() => history.push('/ip/legal')} color="error">Back</Button>
                    <Button style={{ color: '#0c3d50' }}>Submit</Button>
                </Box>
            </center>
        </div>
    )
}

export default Review;