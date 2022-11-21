import { useHistory } from 'react-router-dom';

const Introduction = () => {
    const history = useHistory();

    return (
        <>
            <h3>Introduction</h3>
            <button onClick={() => history.push('/team')}>Continue</button>
        </>
    )
}

export default Introduction;