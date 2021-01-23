import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

export default function Home() {
    const history = useHistory();
    const nextPage = () => {
        history.push('/feeling')
    }

    return (
        <div>
            <p>Share your feedback with us!</p>
            <Button
                endIcon={<DoubleArrowIcon />}
                variant="contained"
                color="primary"
                onClick={() => nextPage()}>
                Let's Begin!
            </Button>
        </div>
    )
}
