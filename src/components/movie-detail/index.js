import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import style from './style.less'

class MovieDetail extends Component {
    
    _handleClose () {
        if (this.props.history.length > 1) {
            this.props.history.goBack()
        }
    }
    render() {
        const movie = this.props.location.state && this.props.location.state.movie

        return(
            <div className={style.container}>
                {movie ? 
                    <Fragment>
                        <div className={style.header}>
                            <span className={style.closeIcon} onClick={() => {this._handleClose()}}>X</span>
                            <img className={style.banner} src="https://pbs.twimg.com/media/CPnnsORWgAYoVno.jpg"/>
                            <div className={style.bannerOverlay}></div>
                            <img className={style.poster} src={ movie.poster } />
                        </div>
                        <div className={style.movieDetails}>
                            <div className={style.movieTitle}>{ movie.name }</div>                    
                            <div className={style.year}>{ movie.year }</div>  
                            <span className={style.playButton}>Play Movie</span>        
                            <div className={style.synopsis}>
                                { movie.synopsis }
                            </div>          
                        </div>
                    </Fragment>
                    :
                    <Link to="/category">Go to Homepage</Link>
                }
            </div>
        )
    }
}

export default MovieDetail