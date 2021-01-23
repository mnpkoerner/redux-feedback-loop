import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert';


export default function Feeling() {

const dispatch = useDispatch()
const history = useHistory()
//local state to capture value from dropdown
const [feeling, setFeeling] = useState('')

//click event sends data to redux, navigates to next page
const handleClick = () => {
    if (feeling === ""){
        swal({
            title: "Please select an option",
            text: "We use your feedback to help tailor our response. Please be honest with your submission",
            icon: "warning",
            button: "OK",
          }).then((understand) => {
            if(understand){
                return
            }
          });
    }
    else {
    dispatch({type: 'FEELING', payload: feeling});
    history.push('/understanding')
}}

    return (
        <div>
            <h1>How were you feeling today?</h1>
            <select
                name="feeling"
                id="feeling"
                value={feeling}
                onChange={(event)=> setFeeling(event.target.value)}>
                    <option value="" disabled>How did you feel today?</option>
                    <option value="5">5 - I felt positive today</option>
                    <option value="4">4 - I felt a little positive today</option>
                    <option value="3">3 - I felt neutral today</option>
                    <option value="2">2 - I felt a little negative today</option>
                    <option value="1">1 - I felt negative today</option>
            </select>
            <button onClick={()=>handleClick()}>Next Page</button>

        </div>
    )
}
