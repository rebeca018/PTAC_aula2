import Link from "next/link"
import styles from "./notFound.module.css"

export default function NotFound(){
    return(
        <div className={styles.error}>
            <h2 className={styles.h2}>Error!</h2>
            <h2 className={styles.h2}>Page not found :(</h2>
            <a href="/"><button className={styles.botao}>Retornar para Home</button></a>
        </div>
    )
}