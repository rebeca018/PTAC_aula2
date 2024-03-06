import styles from "./map.module.css"

export default function Map() {
    return (
        <iframe
          id="gmap_canvas"
          className={styles.mapa}
          src={"https://maps.google.com/maps?q=Nova%20Andradina%20+IFMS+&t=&z=13&ie=UTF8&iwloc=&output=embed"}
          frameborder="0" scrolling="no"
          marginheight="0"
          marginwidth="0">
        </iframe>
    )
}