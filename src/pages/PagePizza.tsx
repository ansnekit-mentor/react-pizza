import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories'
import PizzaBlock, { IPizzaBlock } from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'
import { RootState } from '../redux/store'
import { setCategoryId } from '../redux/slices/filterSlice'

const PagePizza = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const skeletItems = Array(9).fill(1)

    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const dispatch = useDispatch()

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
        <div className="local-container">
            <div className="content__top flex flex-1 flex-col-reverse items-end min-[1100px]:flex-row min-[1100px]:!items-center">
                <Categories
                    activeIndex={categoryId}
                    setCategory={(id) => dispatch(setCategoryId(id))}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items grid gap-8 grid-cols-1 justify-items-center md:grid-cols-2 min-[1100px]:grid-cols-3 2xl:grid-cols-4">
                {isLoading && skeletItems.map(() => <Skeleton />)}
                {items.length &&
                    items.map((pizza: IPizzaBlock) => <PizzaBlock key={pizza.id} {...pizza} />)}
            </div>
        </div>
    )
}

export default PagePizza
