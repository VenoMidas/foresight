import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

const BusinessModel = () => {
    const history = useHistory();

    return (
        <>
            <ProgressBar step={3} />
            <h3>Business Model</h3>
            <button onClick={() => history.push('/product/market')}>Continue</button>
        </>
    )
}

export default BusinessModel;