import React from 'react'
import Categories from './components/Categories'
import Header from './components/Header'
import PizzaBlock, { IPizzaBlock } from './components/PizzaBlock'
import Sort from './components/Sort'
import './styles/app.scss'

function App() {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch('https://642c86dbbf8cbecdb4f2a883.mockapi.io/api/items')
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
            })
    }, [])

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {items.length &&
                                items.map((pizza: IPizzaBlock) => (
                                    <PizzaBlock key={pizza.id} {...pizza} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
