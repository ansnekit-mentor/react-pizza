import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { IPizzaBlock } from '../types'

const PagePizzaDetail = () => {
    const { id } = useParams()
    const [pizza, setPizza] = React.useState<IPizzaBlock | null>(null)

    const fetchPizzas = async () => {
        try {
            const { data } = await axios.get(
                `https://642c86dbbf8cbecdb4f2a883.mockapi.io/api/items/${id}`,
            )
            setPizza(data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        fetchPizzas()
    }, [])

    if (!pizza) {
        return <div>Загрузка...</div>
    }

    return (
        <div className="local-container flex flex-col justify-center items-center">
            <img
                className="pizza__image max-h-fit"
                width="400"
                height="400"
                src={pizza.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza__title text-4xl font-bold mb-3">{pizza.title}</h4>
            <div className="pizza__price text-xl">{pizza.price} руб.</div>
        </div>
    )
}

export default PagePizzaDetail
