import { useHistory } from 'react-router-dom';

const ProductMarket = () => {
    const history = useHistory();

    return (
        <>
            <h3>Product and Market</h3>
            <button onClick={() => history.push('/ip/legal')}>Continue</button>
        </>
    )
}

export default ProductMarket;