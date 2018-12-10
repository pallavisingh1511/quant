import React, { Component } from 'react'
import style from "./style.less";
import { Link } from 'react-router-dom'

class App extends Component {
    
    render() {

        return(
            <div className={style.container}>
                <div className={style.link}>
                    <Link to="/category">Go to Homepage</Link>
                </div>
            </div>
        )
    }
}

export default App