import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FlagIcon from '@material-ui/icons/Flag';
import swal from 'sweetalert';

export default function Admin() {
    //navigation and data storage
    const history = useHistory();
    const adminReducer = useSelector(store => store.adminReducer)
    const dispatch = useDispatch()

    //get data
    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log(response.data);
            dispatch({ type: 'GET_FEEDBACK', payload: response.data })
        })
    }

    const handleDelete = (id) => {
        console.log('feedback', id)
        //go to /feedback/{id}
        const deleteId = Number(id);
        swal({
            title: "Are you sure?",
            text: "This action will delete this feedback forever",
            icon: "warning",
            button: "OK",
        }).then((understand) => {
            if (understand) {
                console.log('in delete', deleteId)
                //delete
                axios({
                    method: 'DELETE',
                    url: `/feedback/${deleteId}`
                }).then((response) => {
                    console.log(response)
                    getFeedback()
                }).catch((error) => {
                    console.log(error)
                })
            }
            else {
                console.log('clicked outside box')
                return
            }
        })
    }

    const flagFeedback = (id) => {
        console.log('feedback', id)
        //go to /feedback/{id}
        const deleteId = Number(id);
        axios({
            method: 'PUT',
            url: `/feedback/${deleteId}`,
            data: deleteId
        }).then((response) => {
            console.log(response)
            getFeedback()
        }).catch((error) => {
            console.log(error)
        })
}


    useEffect(() => {
        getFeedback();
    }, [])
    return (
        <div>
            <h1>Admin Portal</h1>
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Feeling?</th>
                        <th>Understanding?</th>
                        <th>Supported?</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {adminReducer.map((feedback) => {
                        return (
                            <tr key={feedback.id} className={feedback.flagged.toString()}>
                                <td><IconButton
                                    onClick={()=>flagFeedback(feedback.id)}
                                    variant="outlined">
                                    <FlagIcon />
                                </IconButton></td>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                                <td><Button
                                    startIcon={<DeleteForeverIcon />}
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDelete(feedback.id)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
