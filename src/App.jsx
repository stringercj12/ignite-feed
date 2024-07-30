import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './styles.css'
import { Post } from './components/Post';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque ipsam nesciunt modi ducimus impedit soluta perferendis dicta minima assumenda. Perferendis, saepe sapiente alias quo consectetur ullam adipisci distinctio ea."
          />
          <Post
            author="Gabriel Buzzi"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque ipsam nesciunt modi ducimus impedit soluta perferendis dicta minima assumenda. Perferendis, saepe sapiente alias quo consectetur ullam adipisci distinctio ea."
          />

        </main>
      </div>


    </div>
  )
}

export default App
