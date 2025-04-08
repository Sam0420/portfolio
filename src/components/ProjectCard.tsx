import styles from './ProjectCard.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  github: string;
  demo: string;
}

export const ProjectCard = ({ image, title, description, github, demo }: ProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.projectImage} />
        <div className="overlay">
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};