import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

const Team = () => {
    const history = useHistory();

    return (
        <>
            <ProgressBar step={2} />
            <h3>Team</h3>
            <button onClick={() => history.push('/business/model')}>Continue</button>
        </>
    )
}

export default Team;