import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

const Review = () => {
    // useSelectors here

    return (
        <>
            <ProgressBar step={6} />
            <h3>Review and Submit</h3>
            <button>Submit</button>
        </>
    )
}

export default Review;