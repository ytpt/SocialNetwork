import './App.css';
import React, {Component, Suspense} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';
import LoginPage from './login/Login';
import {connect, Provider} from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';
import { withRouter } from './components/Profile/ProfileContainer';
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import bgImg from '../src/assets/images/background.jpg'

const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer'))

class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert('Some error occurred');
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <img width={1000} src={bgImg} />
                        <Routes>
                            <Route exact path='/' element={<Navigate to='/profile' />} />
                            <Route path='/dialogs/*' element={
                                <Suspense fallback={
                                    <div><Preloader /></div>}>
                                    <DialogsContainer />
                                </Suspense>} />
                            <Route path='/profile/:userId' element={
                                <Suspense fallback={
                                    <div><Preloader /></div>}>
                                    <ProfileContainer />
                                </Suspense>} />
                            <Route path='/profile/' element={
                                <Suspense fallback={
                                    <div><Preloader /></div>}>
                                    <ProfileContainer />
                                </Suspense>} />
                            <Route path='/news/*'/>
                            <Route path='/music/*'/>
                            <Route path='/settings/*'/>
                            <Route path='/users/*' element={<UsersContainer/>}/>
                            <Route path='/login/*' element={<LoginPage/>}/>
                            <Route path='*' element= {<div>404 NOT FOUND</div>} />
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
