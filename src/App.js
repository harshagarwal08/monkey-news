import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
    return (
      <>
        <Router>
          <LoadingBar
            height={3}
            color='red'
            progress={progress}
          />
          <NavBar />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress }  key="general" category={'general'} /></Route>
            <Route exact path="/business"><News setProgress={setProgress }  key="business" category={'business'} /></Route>
            <Route exact path="/technology"><News setProgress={setProgress }  key="technology" category={'technology'} /></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress }  key="entertainment" category={'entertainment'} /></Route>
            <Route exact path="/health"><News setProgress={setProgress }  key="health" category={'health'} /></Route>
            <Route exact path="/sports"><News setProgress={setProgress }  key="sports" category={'sports'} /></Route>
          </Switch>
        </Router>
      </>
    )
}

export default App
