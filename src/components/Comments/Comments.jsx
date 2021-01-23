import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default function Comments() {
    const dispatch = useDispatch();
    const history = useHistory()
    //state for comments
    const [comments, setComments] = useState('');

    const handleClick = (direction) => {
        if (direction) {
            dispatch({ type: 'COMMENTS', payload: comments });
            history.push('/submit')
        }
        else {
            history.push('/support')
        }
    }

    return (
        <div>
            <h1>Is there anything else you'd like to tell us?</h1>
            <textarea
                id="comments"
                name="comments"
                rows="15"
                cols="60"
                placeholder="comments"
                onChange={(event) => setComments(event.target.value)}
            >
            </textarea>
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
