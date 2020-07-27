import React from 'react';
import NavBar from './NavBar'
import Post from '../Posts/Post'
import SignedOutNavBar from './SignedOut'
// import Profile from '../User/UserProfile'
// import { connect } from 'react-redux'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <SignedOutNavBar />
                <NavBar />
                
                <div className="space">
                    
                </div>
                <div>
                    <Post /> 
                </div>
            </div>
        )
    }
}