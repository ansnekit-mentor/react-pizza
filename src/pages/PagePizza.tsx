import React from 'react'
import Categories from '../components/Categories'
import PizzaBlock, { IPizzaBlock } from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'

const PagePizza = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const skeletItems = Array(9).fill(1)

    React.useEffect(() => {
        fetch('https://642c86dbbf8cbecdb4f2a883.mockapi.io/api/items')
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading && skeletItems.map((_) => <Skeleton />)}
                {items.length &&
                    items.map((pizza: IPizzaBlock) => <PizzaBlock key={pizza.id} {...pizza} />)}
            </div>
        </div>
    )
}

export default PagePizza
