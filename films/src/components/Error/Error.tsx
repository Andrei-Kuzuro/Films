import styles from "./Error.module.css";

export const Error = () => {
  return (
    <div className={styles.body}>
      <a className={styles.body}>
        <header className={styles.top_header} />

        <div>
          <div className={styles.starsec} />
          <div className={styles.starthird} />
          <div className={styles.starfourth} />
          <div className={styles.starfifth} />
        </div>

        <div className={styles.lamp__wrap}>
          <div className={styles.lamp}>
            <div className={styles.cable} />
            <div className={styles.cover} />
            <div className={styles.in_cover}>
              <div className={styles.bulb} />
            </div>
            <div className={styles.light} />
          </div>
        </div>
        <section className={styles.error}>
          <div className={styles.error__content}>
            <div className={styles.error__message}>
              <h1 className={styles.message__title}>Page Not Found</h1>
              <p className={styles.message__text}>
                We're sorry, the page you were looking for isn't found here. The
                link you followed may either be broken or no longer exists.
                Please try again.
              </p>
            </div>
            <div className={styles.error__nav}>
              <a href="/" className={styles.e_nav__link} />
            </div>
          </div>
        </section>
      </a>
    </div>
  );
};
