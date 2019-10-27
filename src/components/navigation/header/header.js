import React, { Component } from 'react';
import './header.css';
import HeaderProfile from "../../header-profile/header-profile";
class Header extends Component {
    state = {

    };

    componentWillMount() {

    }

    render() {
        return (
            <div className='header'>
                <div className='header-title'>Dashboard</div>
                <HeaderProfile/>
            </div>
        );
    }
}

export default Header;