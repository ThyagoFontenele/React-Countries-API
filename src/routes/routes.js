import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import App from '../App'
import Country from '../components/Country/Country'
export default function routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/countries/:name">
                    <Country country={"name"}/>
                </Route>
            </Switch>
        </Router>
    )
    
}
