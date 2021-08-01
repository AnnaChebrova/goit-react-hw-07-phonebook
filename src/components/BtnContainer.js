import styles from './feedback.module.css'

const ButtonContainer = ({onGood, onNeutral, onBad}) => (

<div className={styles.buttonContainer}>

<button type="button" className={styles.button} onClick={onGood}>good</button>
<button type="button" className={styles.button} onClick={onNeutral}>neutral</button>
<button type="button" className={styles.button} onClick={onBad}>bad</button>
</div>
);

export default ButtonContainer;
