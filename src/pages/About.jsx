import React, {Component} from 'react'
import NavBar from '../components/navbar'

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'About'
        }
    }
    render() {
        return (
            <div><NavBar/>
            <br/>This is the {this.state.title}
            </div>
        )
    }
}

export default About;
