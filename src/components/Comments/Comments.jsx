import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

export default function Comments() {
const dispatch = useDispatch();
const history = useHistory()
//state for comments
const [comments, setComments] = useState('');

const handleClick = () => {
    dispatch({type: 'COMMENTS', payload: comments});
    history.push('/submit')
}

    return(
        <div>
            <h1>Is there anything else you'd like to tell us?</h1>
            <textarea
                id="comments"
                name="comments"
                rows="15"
                cols="60"
                placeholder="comments"
                onChange={(event)=>setComments(event.target.value)}
                >
            </textarea>
            <button onClick={()=>handleClick()}>Next Page</button>
        </div>
    )
}
