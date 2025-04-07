import styles from './App.module.css'
import {HeroSection} from './components/HeroSection';
import {PromptCard} from './components/PromptCard';

function App() {

  return (
    <div className={styles.appContainer}>
    <HeroSection/>

    <PromptCard
        prompt="A fun fact about me"
        answer="I once debugged a React app in a dream and woke up to the real fix 😅"
      />
      <PromptCard
        prompt="My ideal tech stack"
        answer="React + TypeScript + Node.js + MongoDB — but always open to trying cool stuff!"
      />
      <PromptCard
        prompt="A project I'm proud of"
        answer="A Pomodoro app with dark/light mode and time-based animations. Learned a lot about React hooks!"
      />
      <PromptCard
        prompt="Let's build together if..."
        answer="You’re passionate about clean code, good vibes, and meaningful user experiences 💫"
      />


    </div>
  )
}

export default App
