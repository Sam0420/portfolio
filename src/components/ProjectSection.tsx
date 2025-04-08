import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectSection.module.css"


export const ProjectSection = () => {
    const projects = [
        {
            title: 'Pomodoro App',
            description: 'A productivity timer with animated UI and dark/light mode.',
            image: 'https://placekitten.com/600/300',
            github: 'https://github.com/yourusername/pomodoro-app',
            demo: 'https://pomodoro-yourname.vercel.app'
        },

        {
            title: 'Weather App',
            description: 'Shows weather with dynamic backgrounds and geolocation.',
            image: 'https://placekitten.com/600/301',
            github: 'https://github.com/yourusername/weather-app',
            demo: 'https://weather-yourname.vercel.app'
          },
    ]; 

    return (
        <section className={styles.ProjectsSection}>
             <h2 className={styles.projectsHeading}>Projects I'm Proud Of</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
        </section>

    );
} 