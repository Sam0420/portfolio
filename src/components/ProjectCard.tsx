import {styles} from './ProjectCard.module.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps  {
    image : string; 
    title : string; 
    github : string; 
    demo : string; 
}

export const ProjectCard = ({image, title, github, demo} : ProjectCardProps) => {
    return (
        <div className={styles.projectCard}>
            <img src={image} alt={title} className={styles.projectImage} />
            <div className={styles.projectContent}>
                <h3> {title} </h3>
                <div className={styles.projectLinks}>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub/>
                    </a>

                    <a href={demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt/>
                    </a>
                
                </div>
            </div>
        </div>
    );
}