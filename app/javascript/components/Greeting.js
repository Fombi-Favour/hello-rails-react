import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreeting } from '../redux/greeting/greetingSlice'

const Greeting = () => {

    const dispatch = useDispatch();
    const greet = useSelector((state) => state.greeting.message);
    useEffect(() => {
        if (!greet) {
            dispatch(fetchGreeting())
            .then(() => {
                console.log('Success!!!')
            }).catch(() => { console.log('Error!!!') });
        }
    }, [dispatch])

    return (
        <h1> {greet} </h1>
    )
}

export default Greeting