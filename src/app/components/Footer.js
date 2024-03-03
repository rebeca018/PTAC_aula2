import styles from "./footer.module.css"
import Image from "next/image";

export default function Footer(){
    return(
        <footer className={styles.rodape}>
             <Image
                width={200}
                height={50}
                src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"} />
        </footer>
    )
}
