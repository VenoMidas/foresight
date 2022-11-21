import { useHistory } from 'react-router-dom';

const BusinessModel = () => {
    const history = useHistory();

    return (
        <>
            <h3>Business Model</h3>
            <button onClick={() => history.push('/product/market')}>Continue</button>
        </>
    )
}

export default BusinessModel;