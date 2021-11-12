import styles from "../styles/components/Header.module.scss"

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.locale}>
        <span>São Paulo SP: 011-3892-8295 | Campinas SP: 019-3399-3474 | e-mail: adm@madini.com.br</span>
      </div>
      <div className={styles.separator}></div>
      <nav>
        <span>
          LOGO
        </span>
      </nav>
      <div className={styles.separator}></div>
    </header>
  )
}

export {Header}
