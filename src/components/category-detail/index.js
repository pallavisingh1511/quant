import React, { Component, Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import style from './style.less'

class CategoryDetail extends Component {
    _renderMovieCards() {
        const movies = [{
                id: 1,
                name: "Forest Gump",
                poster: "//upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg",
                banner: "https://pbs.twimg.com/media/CPnnsORWgAYoVno.jpg",
                synopsis: "Forrest Gump is a 1994 American comedy-drama film based on the 1986 novel of the same name by Winston Groom. It was directed by Robert Zemeckis and written by Eric Roth, and stars Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson, and Sally Field. The story depicts several decades in the life of Forrest Gump (Hanks), a slow-witted but kind-hearted man from Alabama who witnesses several defining historical events in the 20th century in the United States. The film differs substantially from the novel. Principal photography took place in late 1993, mainly in Georgia, North Carolina, and South Carolina. Extensive visual effects were used to incorporate Hanks into archived footage and develop other scenes. The soundtrack features songs reflecting the different periods seen in the film.",
                year: 1994
            }, {
                id: 2,
                name: "Ben Hur",
                poster: "http://www.ygoy.com/wp-content/uploads/2011/10/Ben-Hur.jpg",
                banner: "https://pbs.twimg.com/media/CPnnsORWgAYoVno.jpg",
                synopsis: "Ben-Hur is a 1959 American epic religious drama film, directed by William Wyler, produced by Sam Zimbalist for Metro-Goldwyn-Mayer and starring Charlton Heston as the title character. A remake of the 1925 silent film with the same title, Ben-Hur was adapted from Lew Wallace's 1880 novel Ben-Hur: A Tale of the Christ. The screenplay is credited to Karl Tunberg, but includes contributions from Maxwell Anderson, S. N. Behrman, Gore Vidal, and Christopher Fry.",
                year: 1959
            }, {
                id: 3,
                name: "Pacific Rim",
                poster: "http://content6.flixster.com/site/10/26/50/10265000_ori.jpg",
                banner: "https://pbs.twimg.com/media/CPnnsORWgAYoVno.jpg",
                synopsis: "Pacific Rim is a 2013 American science fiction monster film directed by Guillermo del Toro and starring Charlie Hunnam, Idris Elba, Rinko Kikuchi, Charlie Day, Burn Gorman, Robert Kazinsky, Max Martini, and Ron Perlman. The screenplay was written by Travis Beacham and del Toro from a story by Beacham. The film is set in the future, when Earth is at war with the Kaiju,[a] colossal sea monsters which have emerged from an interdimensional portal on the bottom of the Pacific Ocean. To combat the monsters, humanity unites to create the Jaegers,[b] gigantic humanoid mechas, each controlled by at least two pilots, whose minds are joined by a mental link. Focusing on the war's later days, the story follows Raleigh Becket, a washed-up Jaeger pilot called out of retirement and teamed with rookie pilot Mako Mori as part of a last-ditch effort to defeat the Kaiju.",
                year: 2013
            }, {
                id: 4,
                name: "Inferno",
                poster: "https://i.pinimg.com/236x/6e/e2/87/6ee2877618eeeecf390a37c948c35000.jpg",
                banner: "https://pbs.twimg.com/media/CPnnsORWgAYoVno.jpg",
                synopsis: "Inferno is a 2016 American action mystery thriller film directed by Ron Howard and written by David Koepp, based on the 2013 novel of the same name by Dan Brown. The film is the sequel to The Da Vinci Code (2006) and Angels & Demons (2009), and is the third installment in the Robert Langdon film series. It stars Tom Hanks, reprising his role as Robert Langdon, alongside Felicity Jones, Omar Sy, Sidse Babett Knudsen, Ben Foster, and Irrfan Khan. Together with the previous film, it remains Hanks' only live-action sequel.",
                year: 2016
            }, {
                id: 5,
                name: "The Physician",
                poster: "https://images-na.ssl-images-amazon.com/images/I/918qCXV2nNL._UY200_RI_.jpg",
                banner: "https://pbs.twimg.com/media/CPnnsORWgAYoVno.jpg",
                synopsis: "It is the Dark Ages, and the Church is fighting against 'black magic'. The medical knowledge of Greek physicians like Hippocrates and Galen had been lost to the medicine of medieval Europe (until taught later in schools such as the School of Salerno after the Arabic-Latin translation movement of the 12th century). In 11th-century England, travelling barber surgeons attempted to supply medical care to the ordinary population, often at the risk of the Church persecuting them for witchcraft.",
                year: 2013
            }, {
                id: 6,
                name: "Wonder Woman",
                poster: "https://www.movieinsider.com/images/p/150/475446_m1503220502.jpg",
                banner: "https://pbs.twimg.com/media/CPnnsORWgAYoVno.jpg",
                synopsis: "Wonder Woman is a 2017 American superhero film based on the DC Comics character of the same name, produced by DC Entertainment in association with RatPac Entertainment and Chinese company Tencent Pictures, and distributed by Warner Bros. Pictures. It is the fourth installment in the DC Extended Universe (DCEU).[6] Directed by Patty Jenkins from a screenplay by Allan Heinberg and a story by Heinberg, Zack Snyder, and Jason Fuchs, Wonder Woman stars Gal Gadot in the title role, alongside Chris Pine, Robin Wright, Danny Huston, David Thewlis, Connie Nielsen, and Elena Anaya. It is the second live action theatrical film featuring Wonder Woman following her debut in 2016's Batman v Superman: Dawn of Justice.[7] In Wonder Woman, the Amazon princess Diana sets out to stop World War I, believing the conflict was started by the longtime enemy of the Amazons, Ares, after American pilot and spy Steve Trevor crash-lands on their island Themyscira and informs her about it.",
                year: 2017
            }
        ]
        return (
            <Fragment>
                {movies.map(movie =>
                    <Link to={{pathname: `/movie-detail/${movie.name.replace(/ +/g, '-').toLowerCase()}`, state: {movie: movie}}} className={style.posterContainer} key={movie.id} movie={movie}>
                        <img className={style.poster} src={movie.poster} />
                    </Link>
                )}
            </Fragment>
        )
    }

    _handleClose () {
        if (this.props.history.length > 1) {
            this.props.history.goBack()
        }
    }
    render() {
        return(
            <div className={style.detailContainer}>
                <div className={style.header}>
                    <span className={style.headerLeft}>
                        <span className={style.categoryTitle}>Movies</span>
                        <span className={style.categoryCount}>46 items</span>
                    </span>
                    <span className={style.closeIcon} onClick={() => {this._handleClose()}}>X</span>
                </div>
                <div className={style.categoryDetails}>
                    <div className={style.subCategory}>
                        <div className={style.subCategoryTitle}>Netflix - My List</div>
                        <div className={style.subCategoryListing}>
                            { this._renderMovieCards() }
                        </div>
                    </div>
                    <div className={style.subCategory}>
                        <div className={style.subCategoryTitle}>Amazon Prime Video - Watchlist</div>
                        <div className={style.subCategoryListing}>
                            { this._renderMovieCards() }
                        </div>
                    </div>
                    <div className={style.subCategory}>
                        <div className={style.subCategoryTitle}>YouTube Video - Watchlist</div>
                        <div className={style.subCategoryListing}>
                            { this._renderMovieCards() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryDetail