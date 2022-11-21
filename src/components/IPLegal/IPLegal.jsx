import { useHistory } from 'react-router-dom';

const IPLegal = () => {
    const history = useHistory();

    return (
        <>
            <h3>IP and Legal</h3>
            <button onClick={() => history.push('/review')}>Review</button>
        </>
    )
}

export default IPLegal;