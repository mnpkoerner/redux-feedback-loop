import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';
import Button from '@material-ui/core/Button'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default function Understanding() {
    const dispatch = useDispatch()
    const history = useHistory()
    //local state to capture value from dropdown
    const [understanding, setUnderstanding] = useState('')

    //click event sends data to redux, navigates to next page

    const handleClick = (direction) => {
        if (direction) {
            if (understanding === "") {
                swal({
                    title: "Please select an option",
                    text: "We use your feedback to help tailor our response. Please be honest with your submission",
                    icon: "warning",
                    button: "OK",
                }).then((understand) => {
                    if (understand) {
                        return
                    }
                });
            }
            else {
                dispatch({ type: 'UNDERSTANDING', payload: understanding });
                history.push('/support')
            }
        }
        else {
            history.push('/feeling')
        }
    }

    return (
        <div>
            <h1>How well did you understand the material today?</h1>
            <select
                name="understanding"
                id="understanding"
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}>
                <option value="" disabled>How is your understanding?</option>
                <option value="5">5 - I could teach this!</option>
                <option value="4">4 - I could help a little</option>
                <option value="3">3 - I feel neutral</option>
                <option value="2">2 - I need a little help</option>
                <option value="1">1 - I need extra help</option>
            </select>
            <div className="button_box">
                <Button
                    startIcon={<KeyboardArrowLeftIcon />}
                    variant='contained'
                    color='secondary'
                    onClick={() => handleClick(false)}>
                    Go Back
            </Button>
                <Button
                    endIcon={<DoubleArrowIcon />}
                    variant="contained"
                    color="primary"
                    onClick={() => handleClick(true)}>
                    Next Page
            </Button>
            </div>

        </div>
    )
}
