import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home.js"
import Resume from "./pages/resume.js"
import CatchAll from "./pages/catch-all.js"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/:id" component={CatchAll} />
      </Switch>
    </Router>
  )
}

export default App
