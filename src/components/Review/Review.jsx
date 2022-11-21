import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Review = () => {
    const history = useHistory();
    // useSelectors here

    return (
        <center>
            <Box>
                <ProgressBar step={6} />
                <h2>Review and Submit</h2>
                <p>Questions and Answers Here</p>
                <Button onClick={() => history.push('/ip/legal')}>Back</Button>
                <Button>Submit</Button>
            </Box>
        </center>
    )
}

export default Review;