import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const BusinessModel = () => {
    const history = useHistory();

    return (
        <center>
            <Box>
                <ProgressBar step={3} />
                <h2>Business Model</h2>
                <p>Questions Here</p>
                <Button onClick={() => history.push('/team')}>Back</Button>
                <Button onClick={() => history.push('/product/market')}>Continue</Button>
            </Box>
        </center>
    )
}

export default BusinessModel;