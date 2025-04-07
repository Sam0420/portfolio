import styles from "./HeroSection.module.css"


export const HeroSection = () => {

    return (
        <section>
            <img
            src="https://placekitten.com/400/400"
            alt="Profile Photo"
            className={styles.heroImage}
            />
            <h1 className={styles.heroName}> Samandar Hashimi </h1>
            <p className={styles.heroTagline}> "Available for long-term commitments... to code 💍" </p>

        </section>
    );
}