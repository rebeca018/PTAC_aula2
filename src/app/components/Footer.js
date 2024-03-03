import styles from "./footer.module.css"
import Image from "next/image";

export default function Footer(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.img}>
            <Image
                width={100}
                height={25}
                src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"} />
            </div>
             
        </footer>
    )
}
