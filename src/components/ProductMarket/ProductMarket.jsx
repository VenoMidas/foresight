import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

const ProductMarket = () => {
    const history = useHistory();

    return (
        <>
            <ProgressBar step={4} />
            <h3>Product and Market</h3>
            <button onClick={() => history.push('/ip/legal')}>Continue</button>
        </>
    )
}

export default ProductMarket;