import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

const Introduction = () => {
    const history = useHistory();

    return (
        <>
            <ProgressBar step={1} />
            <h3>Introduction</h3>
            <button onClick={() => history.push('/team')}>Continue</button>
        </>
    )
}

export default Introduction;