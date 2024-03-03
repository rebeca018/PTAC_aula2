import Link from "next/link"
import styles from "./notFound.module.css"

export default function NotFound(){
    return(
        <div className={styles.error}>
            <h2>Error!</h2>
            <Link href="/">Retornar para Home</Link>
        </div>
    )
}