import React from 'react'
import { Link } from 'react-router-dom'
import classes from './empty-page.module.scss'

const EmptyPage = () => {
    return (
        <div className="container container--cart">
            <div className="cart cart--empty">
                <h1 className="cart-title">
                    <span className={classes.smile}>😕</span>
                </h1>
                <h2 className="text-5xl font-bold mb-8">Страница не найдена :(</h2>
                <p className="mb-4">Перейдите на главную страницу</p>
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default EmptyPage
