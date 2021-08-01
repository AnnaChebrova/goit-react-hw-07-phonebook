import styles from './feedback.module.css'
import React from 'react';


const Statistics = ({good, neutral, bad, total, positive}) =>(
<div className={styles.statContainer}>
    <span>Good:{good}</span>
    <span>Neutral:{neutral}</span>
    <span>Bad:{bad}</span>
    {(total !==0) ? 
    <>
    <p>Total feedbacks: {total}</p>
    <p>Positive feedbacks: {positive()}%</p>
    </> : "No feedback given"}
    </div>
);

export default Statistics;
