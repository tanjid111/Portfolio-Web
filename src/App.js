import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"

import { ThemeProvider } from "styled-components"
import AboutPage from "./components/AboutPage"
import Main from "./components/Main"
import MySkillsPage from "./components/MySkillsPage"
import ProjectsPage from "./components/ProjectsPage"
import { lightTheme } from "./components/Themes"
import WorkPage from "./components/WorkPage"
import GlobalStyle from "./globalStyles"

function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/about' component={AboutPage}></Route>
        <Route exact path='/projects' component={ProjectsPage}></Route>
        <Route exact path='/work' component={WorkPage}></Route>
        <Route exact path='/skills' component={MySkillsPage}></Route>
      </Switch>

    </ThemeProvider>

  </>

}

export default App

