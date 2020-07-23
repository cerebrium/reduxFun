import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    up,
    left,
    moveXLocation,
    moveYLocation,
    findXLocation,
    findYLocation
        } from './moverSlice';
import styles from './dot.module.css';

export function Move (props) {
    const dispatch = useDispatch();
    const countX = useSelector(findXLocation);
    const countY = useSelector(findYLocation);

    // function for changeing the div location
    const changeDivLocation = {
        top: countY,
        left: countX,
        transition: '1s ease',
    }

    // updates the state
    useEffect( () => {
        dispatch(up(props.xCoordinate))
        dispatch(left(props.yCoordinate))
    }, [props, dispatch])

    return (
        <div className={styles.moverDot} style={changeDivLocation}>

        </div>
    )

}  
