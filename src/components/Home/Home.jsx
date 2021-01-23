import {useHistory} from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    const nextPage = () => {
        history.push('/feeling')
    }

    return(
        <div>
            <p>Share your feedback with us!</p>
            <button onClick={()=>nextPage()}>Let's Begin!</button>
        </div>
    )
}
