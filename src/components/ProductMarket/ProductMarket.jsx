import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ProductMarket = () => {
    const history = useHistory();

    return (
        <center>
            <Box>
                <ProgressBar step={4} />
                <h2>Product and Market</h2>
                <p>Questions Here</p>
                <Button onClick={() => history.push('/business/model')}>Back</Button>
                <Button onClick={() => history.push('/ip/legal')}>Continue</Button>
            </Box>
        </center>
    )
}

export default ProductMarket;