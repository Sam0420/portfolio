import styles from './TechProfileSection.module.css';
import { FaReact, FaNodeJs, FaUniversity, FaCode, FaSchool, FaSearch } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export const TechProfileSection = () => {
    return (
        <section className={styles.techProfile}>
             <div className={styles.techScrollWrapper}>
            <div className={styles.techTopScrollable}>
                <div className={styles.techTag}> <FaReact /> Frontend Dev </div>
                <div className={styles.techTag}> <SiTypescript /> Typescript </div>
                <div className={styles.techTag}> <FaNodeJs/> Full Stack </div>
                <div className={styles.techTag}> <FaNodeJs/> Full Stack </div>
                <div className={styles.techTag}> <FaNodeJs/> Full Stack </div>
                <div className={styles.techTag}> <FaNodeJs/> Full Stack </div>
            </div>
            </div>

            <div className={styles.techRow}><FaCode/> Software Engineering & Mangement </div>
            <div className={styles.techRow}> <FaUniversity/> Gothenburg University </div>
            <div className={styles.techRow}> <FaSchool/> International School of Helsingborg</div>
            <div className={styles.techRow}> <FaSearch/> Honestly? A job!</div>
        </section>
    ); 
};