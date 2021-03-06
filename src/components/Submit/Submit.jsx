import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import Button from '@material-ui/core/Button'
import PublishIcon from '@material-ui/icons/Publish';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';


export default function Submit() {
    const feedbackReducer = useSelector(store => store.feedbackReducer)
    const history = useHistory();
    const dispatch = useDispatch();

    //send in feedbackReducer for POST
    const handleClick = (data) => {
        if (data) {
            //needs to be posted to server
            //
            axios({
                method: 'POST',
                url: '/feedback',
                data: data
            }).then((response) => {
                console.log(response)
                swal({
                    title: "Thank you!",
                    text: "We appreciate your feedback!",
                    icon: "success",
                    button: "OK",
                }).then((understand) => {
                    if (understand) {
                        dispatch({ type: 'RESET' })
                        history.push('/');
                    }
                });
            }).catch((error) => {
                console.log(error)
                alert('error sending data')
            })
        }
        else {
            history.push('/comments')
        }
    }

    return (
        <div>
            <h1>Thanks for your feedback!</h1>
            <h4>How did you feel today?</h4>
            <h5>{feedbackReducer.feeling} out of 5</h5>
            <h4>Well did you understand the material today?</h4>
            <h5>{feedbackReducer.understanding} out of 5</h5>
            <h4>How well did we support you today?</h4>
            <h5>{feedbackReducer.support} out of 5</h5>
            <h3>Additional feedback:</h3>
            <h5>{feedbackReducer.comments}</h5>
            <div className="button_box">
                <Button
                    startIcon={<KeyboardArrowLeftIcon />}
                    variant='contained'
                    color='secondary'
                    onClick={() => handleClick(false)}>
                    Go Back
            </Button>
                <Button
                    endIcon={<PublishIcon />}
                    variant="contained"
                    color="primary"
                    onClick={() => handleClick(feedbackReducer)}>
                    Submit
            </Button>
            </div>
        </div>
    )
}
