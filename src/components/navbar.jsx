import React, {Component} from 'react'
import { Link } from 'react-router';

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            yo: 'yo'
        }
    }
    render() {
        return (
            <div className="nav-bar">
                <div className='container'>
                    <div className='row'>
                        <div className='col'><Link to="/about">About</Link></div>
                        <div className='col'><Link to="/">Home</Link></div>
                        <div className='col'><Link to="/about">About</Link></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default NavBar;
