import React from 'react'

const CATEGORIES = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className="categories">
            <ul>
                {CATEGORIES.map((category, idx) => (
                    <li key={category} className={activeIndex === idx ? 'active' : ''}>
                        <button type="button" onClick={() => setActiveIndex(idx)}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
