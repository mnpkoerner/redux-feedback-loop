
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

export default function Support() {
    const dispatch = useDispatch()
    const history = useHistory()
    //local state to capture value from dropdown
    const [support, setSupport] = useState('')

    //click event sends data to redux, navigates to next page

    const handleClick = () => {
        if (support === "") {
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
            dispatch({ type: 'SUPPORT', payload: support });
            history.push('/comments')
        }
    }

    return (
        <div>
            <h1>How well supported did you feel today?</h1>

            <select
                name="support"
                id="support"
                value={support}
                onChange={(event) => setSupport(event.target.value)}>
                <option value="" disabled>How well supported were you?</option>
                <option value="5">5 - Extremely supported!</option>
                <option value="4">4 - Well supported</option>
                <option value="3">3 - I feel neutral</option>
                <option value="2">2 - I needed more support</option>
                <option value="1">1 - Not supported</option>
            </select>
            <button onClick={() => handleClick()}>Next Page</button>

        </div>
    )
}
