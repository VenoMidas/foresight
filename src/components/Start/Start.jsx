import { useHistory } from 'react-router-dom';

const Start = () => {
    const history = useHistory();

    return (
        <>
            <h3>Welcome</h3>
            <button onClick={() => history.push('/introduction')}>Start</button>
        </>
    )
}

export default Start;