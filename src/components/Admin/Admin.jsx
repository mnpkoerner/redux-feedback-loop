import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react';
import Button from '@material-ui/core/Button'
import swal from 'sweetalert';

export default function Admin () {
    //navigation and data storage
    const history = useHistory();
    const adminReducer = useSelector(store=>store.adminReducer)
    const dispatch = useDispatch()

    //get data
    const getFeedback = () =>{
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response)=>{
            console.log(response.data);
            dispatch({type: 'GET_FEEDBACK', payload: response.data})
        })
    }

    const handleDelete = () => {
        console.log('delte')
    }
    
    useEffect(() => {
        getFeedback();
    }, [])
    return(
        <p>test</p>
    )
}
