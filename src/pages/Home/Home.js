import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getData} from "../../store/actions/repositoryActions"

export default function Home(props) {
    const dispatch= useDispatch()
    let welcomeMessage = useSelector(state => state.data);

    useEffect(() => {
        dispatch(getData("/Home", props))
    }, )
    

    return (
        <div>
            {welcomeMessage}
        </div>
    )
}
