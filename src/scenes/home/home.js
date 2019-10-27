import React, { Component } from 'react';
import './home.css';
import Updates from "../../components/widgets/updates/updates";
class Home extends Component {
    state = {

    };

    componentWillMount() {

    }

    render() {
        return (
            <div className='home'>
                <Updates/>
            </div>
        );
    }
}

export default Home;