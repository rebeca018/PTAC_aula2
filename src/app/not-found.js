import Link from "next/link"
import styles from "./notFound.module.css"
import "./components/menu.module.css"
import "./components/footer.module.css"

export default function NotFound(){
    return(
        <main>
        <div className={styles.error}>
            <h2 className={styles.h2}>Error!</h2>
            <h2 className={styles.h2}>Page not found :(</h2>
            <a href="/"><button className={styles.botao}>Retornar para Home</button></a>
            <Link href="/"><button className={styles.botao}>Retornar para Home</button></Link>
        </div>
        </main>
    )
}