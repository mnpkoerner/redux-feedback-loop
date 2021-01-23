import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

export default function Comments() {
const dispatch = useDispatch();
const history = useHistory()
//state for comments
const [comments, setComments] = useState('');

const handleClick = (direction) => {
    if(direction){
    dispatch({type: 'COMMENTS', payload: comments});
    history.push('/submit')
    }
    else{
        history.push('/support')
    }
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
            <button onClick={()=>handleClick(false)}>Previous Page</button>
            <button onClick={()=>handleClick(true)}>Next Page</button>
        </div>
    )
}
