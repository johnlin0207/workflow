import React from 'react';
import App from '../pages/App';
//import Draw1 from '../components/Draw1';
import {connect} from 'react-redux'
import Login from '../pages/Login';
import NoMatch from '../pages/NoMatch';

import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom'

class WebRouter extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} component={Login}/>
                    <PrivateRoute path='/app' component={App} status={this.props.status}/>F
                    <Route component={NoMatch}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

const PrivateRoute = ({component: Component, status: Status, ...rest}) => (

    <Route {...rest} render={props => Number(Status) === 1 ? (
        <Component {...props}/>
    ) : (
        <Redirect to={{pathname: '/', state: {from: props.location}}}/>)}
    />
);

const mapStateToProps = state => {
    let {status} = state.userInfo;

    return {status};
};

export default connect(mapStateToProps)(WebRouter)