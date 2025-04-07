import styles from "./PromptCard.module.css"

interface PromptCardProps {
    prompt: string; 
    answer : string; 
}

export const PromptCard = ({prompt, answer} : PromptCardProps) => {
    return (
        <div className={styles.promptCard}>
            <h3 className={styles.prompt}>{prompt}</h3>
            <p className = {styles.answer}> {answer}</p>

        </div>
    );

} 