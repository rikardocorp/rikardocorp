import React, {Component} from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'

import appRoutes from './routes/index'
import './assets/scss/body.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/hover.css/css/hover-min.css'

class App extends Component {

    componentDidMount() {
        // console.log('appRoutes')
        // console.log(appRoutes)
    }

    render() {
        return (
            <Switch>
                {
                    appRoutes.map((route, key) => {
                        if (route.redirect) {
                            return (
                                <Redirect from={route.path} to={route.to} key={key} />
                            )
                        }
                        return (
                            <Route path={route.path} component={route.component} key={key}/>
                        )
                    })
                }
            </Switch>
        );
    }
}

export default App;
