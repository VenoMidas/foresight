import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

const IPLegal = () => {
    const history = useHistory();

    return (
        <>
            <ProgressBar step={5} />
            <h3>IP and Legal</h3>
            <button onClick={() => history.push('/review')}>Review</button>
        </>
    )
}

export default IPLegal;