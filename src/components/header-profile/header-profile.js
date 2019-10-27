import React, { Component } from 'react';
import './header-profile.css';
class HeaderProfile extends Component {
    state = {

    };

    componentWillMount() {

    }

    render() {
        return (
            <div className='header-profile'>
                <p className='username-greeting'>Hi, Emma</p>
                <img className='user-avatar' src='https://yt3.ggpht.com/a/AGF-l78hmDnWMzuYkYDiD29897gzTuQFy7J4FkJWyA=s900-c-k-c0xffffffff-no-rj-mo'/>
            </div>
        );
    }
}

export default HeaderProfile;