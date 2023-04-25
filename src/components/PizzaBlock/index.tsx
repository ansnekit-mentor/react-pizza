import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
import { RootState } from '../../redux/store'

export interface IPizzaBlock {
    id: number
    imageUrl: string
    title: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
}

const PizzaBlock = ({
    id = 0,
    imageUrl = '',
    title = '',
    types = [],
    sizes = [],
    price = 0,
}: IPizzaBlock) => {
    const typeItems = [
        { name: 'тонкое', value: 0 },
        { name: 'традиционное', value: 0 },
    ]
    const [activeType, setActiveType] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(26)

    const dispatch = useDispatch()
    const cartItem = useSelector((state: RootState) => state.cart.items.find((el) => el.id === id))
    const addedCount = cartItem ? cartItem.count : 0

    const onAddCart = () => {
        const item = {
            id,
            title,
            imageUrl,
            price,
            type: typeItems[activeType].name,
            size: activeSize,
            count: 1,
        }
        dispatch(addItem(item))
    }

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul className="flex flex-1 mb-1">
                    {types.map((typeId) => (
                        <li key={typeId} className="flex flex-1">
                            <button
                                type="button"
                                className={typeId === activeType ? 'active' : ''}
                                onClick={() => setActiveType(typeId)}
                            >
                                {typeItems[typeId].name}
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-1">
                    {sizes.length &&
                        sizes.map((size) => (
                            <li key={size} className="flex flex-1">
                                <button
                                    type="button"
                                    className={size === activeSize ? 'active' : ''}
                                    onClick={() => setActiveSize(size)}
                                >
                                    {size} см.
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button
                    type="button"
                    className="button button--outline button--add flex items-center"
                    onClick={onAddCart}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addedCount > 0 && <i>{addedCount}</i>}
                </button>
            </div>
        </div>
    )
}

export default PizzaBlock
