import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import swal from 'sweetalert';


export default function Submit() {
    const feedbackReducer = useSelector(store => store.feedbackReducer)
    const history = useHistory();
    const dispatch = useDispatch();

    //send in feedbackReducer for POST
    const handleClick = (data) => {
        if(data){
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
    else{
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
            <button onClick={()=>handleClick(false)}>Previous Page</button>
            <button onClick={() => handleClick(feedbackReducer)}>Submit</button>
        </div>
    )
}
