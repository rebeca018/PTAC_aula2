import styles from "./footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.rodape}>
            <Image
                width={100}
                height={100}
                src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"} />
            <p>footer</p>
        </footer>
    )
}
