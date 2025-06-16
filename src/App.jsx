import Background from './components/Background'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Projects from './components/projects/ProjectsIndex'
import React, {Suspense} from 'react'

function Portfolio() {
  const { t, i18n } = useTranslation();


}

function App () {
  return (
    <div>
      <Suspense fallback="loading">
        <Background />
        <AboutMe />
        <Projects />
      </Suspense>
    </div>
  )
}

export default App
