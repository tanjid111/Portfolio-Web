import { AnimatePresence } from "framer-motion"
import { Switch, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import AboutPage from "./components/AboutPage"
import Main from "./components/Main"
import MySkillsPage from "./components/MySkillsPage"
import ProjectsPage from "./components/ProjectsPage"
import { lightTheme } from "./components/Themes"
import Blogs from "./components/Blogs"

import GlobalStyle from "./globalStyles"
import SoundBar from "./subComponents/SoundBar"

function App() {
  const location = useLocation();
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>

      <SoundBar />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Main}></Route>
          <Route exact path='/about' component={AboutPage}></Route>
          <Route exact path='/projects' component={ProjectsPage}></Route>
          <Route exact path='/blogs' component={Blogs}></Route>
          <Route exact path='/skills' component={MySkillsPage}></Route>
        </Switch>
      </AnimatePresence>


    </ThemeProvider>

  </>

}

export default App

