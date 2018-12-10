import React, { Component, Fragment } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import style from './style.less'

class CategoryListing extends Component {
    _renderCategoryCard() {
        const categories = [{
                id: 1,
                name: "Movies",
                count: 46,
            }, {
                id: 2,
                name: "Music",
                count: 57,
            }, {
                id: 3,
                name: "Podcasts",
                count: 86,
            }, {
                id: 4,
                name: "Books",
                count: 122,
            }, {
                id: 5,
                name: "Concerts",
                count: 23,
            },
        ]
        return (
            <Fragment>
                {categories.map(category =>
                    <Link to={{pathname: `/category-detail/${category.name.toLowerCase()}`}} className={style.categoryCard} key={ category.id }>
                        <div className={style.categoryTitle}>{ category.name }</div>
                        <div className={style.categoryCount}>{ category.count } items</div>
                    </Link>
                )}
            </Fragment>
        )
    }
    render() {
        return(
            <div className={style.container}>
                <div className={style.header}>
                    <span className={style.title}>My Things</span>
                    <img className={style.profileImage} src="https://dd9xtpjstvsy0.cloudfront.net/production/images/epat-faculty/EP-Chan.jpg"></img>
                </div>
                <div className={style.categoryListing}>
                    { this._renderCategoryCard() }
                </div>
            </div>
        )
    }
}

export default CategoryListing