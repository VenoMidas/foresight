import { useHistory } from 'react-router-dom';

const Team = () => {
    const history = useHistory();

    return (
        <>
            <h3>Team</h3>
            <button onClick={() => history.push('/business/model')}>Continue</button>
        </>
    )
}

export default Team;