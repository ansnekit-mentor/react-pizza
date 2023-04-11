import React from 'react'

const CATEGORIES = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className="categories w-full overflow-scroll py-4">
            <ul className="flex gap-x-3 gap-y-2">
                {CATEGORIES.map((category, idx) => (
                    <li key={category}>
                        <button
                            tabIndex={0}
                            className={activeIndex === idx ? 'active' : ''}
                            type="button"
                            onClick={() => setActiveIndex(idx)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
