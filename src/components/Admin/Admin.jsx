import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react';
import Button from '@material-ui/core/Button'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
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

    const handleDelete = (id) => {
        console.log('delete', id)
        //go to /feedback/{id}
        const deleteId = Number(id);
        swal({
            title: "Are you sure?",
            text: "If you click OK, this feedback will be deleted forever",
            icon: "warning",
            button: "OK",
        }).then((understand) => {
            if (understand) {
                console.log('in delete', deleteId)
                //delete
                axios({
                    method: 'DELETE',
                    url: `/feedback/${deleteId}`
                }).then((response)=>{
                    console.log(response)
                    getFeedback()
                }).catch((error)=>{
                    console.log(error)
                })
            }
            else{
                console.log('clicked outside box')
                return
            }
        })
    }


    useEffect(() => {
        getFeedback();
    }, [])
    return(
        <div>
            <h1>Admin Portal</h1>
            <table>
                <thead>
                    <tr>
                        <th>Feeling?</th>
                        <th>Understanding?</th>
                        <th>Supported?</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {adminReducer.map((feedback)=>{
                        return(
                            <tr key={feedback.id}>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                                <td><Button
                                startIcon={<DeleteForeverIcon/>}
                                variant="contained"
                                color="secondary"
                                onClick={()=>handleDelete(feedback.id)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
