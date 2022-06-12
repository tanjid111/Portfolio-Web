import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import AboutPage from "./components/AboutPage"
import Main from "./components/Main"
import MySkillsPage from "./components/MySkillsPage"
import ProjectsPage from "./components/ProjectsPage"
import { lightTheme } from "./components/Themes"
import Blogs from "./components/Blogs"

import GlobalStyle from "./globalStyles"
import SoundBar from "./subComponents/SoundBar"
import ContactPage from "./components/ContactPage"
import { createContext, useState } from "react"



export const ProjectContext = createContext();

function App() {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  const location = useLocation();


  return <>
    <GlobalStyle />
    <ProjectContext.Provider value={[projects, setProjects]}>
      <ThemeProvider theme={lightTheme}>

        <SoundBar />

        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/projects' element={<ProjectsPage />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
            <Route path='/skills' element={<MySkillsPage />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </ProjectContext.Provider>

  </>

}

export default App

