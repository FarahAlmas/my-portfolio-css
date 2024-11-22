import styles from './Button.module.css';

export default function Button(props:{text:string}){
  const {text} = props;
  return(
    <>
    <button className={styles.button}>{text}</button>
    </>
  )
}