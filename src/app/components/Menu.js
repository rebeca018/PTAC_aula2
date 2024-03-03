import Link from "next/link";
import styles from "./menu.module.css"
import Image from "next/image";

export default function Menu() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.img_menu}>
            <Image
                width={30}
                height={30}
                src={"https://www.ifms.edu.br/marcaifms.png"} />
            </div>
            
            <nav className={styles.navbar}>
                <div className={styles.navbar_link}>
                    <Link href="/">
                        Home
                    </Link>
                </div>

                <div className={styles.navbar_link}>
                    <Link href="/registro">
                        Registrar
                    </Link>
                </div>

                <div className={styles.navbar_link}>
                    <Link href="/localizacao">
                        Localização
                    </Link>
                </div>

            </nav>
        </header>
    );

}