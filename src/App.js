import './App.css';
import React, {Component} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './login/Login';
import {connect, Provider} from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';
import { withRouter } from './components/Profile/ProfileContainer';
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile/' element={<ProfileContainer/>}/>
                        <Route path='/news/*'/>
                        <Route path='/music/*'/>
                        <Route path='/settings/*'/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/login/*' element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps,{initializeApp})) (App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
}

export default SamuraiJSApp;
