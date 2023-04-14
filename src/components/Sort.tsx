import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { changeSort } from '../redux/slices/filterSlice'

const sortNames = [
    { name: 'популярности', value: 'popular' },
    { name: 'цене', value: 'price' },
    { name: 'алфавиту', value: 'alphabet' },
]

const Sort = () => {
    const [isShow, setShow] = React.useState(false)
    const sort = useSelector((state: RootState) => state.filter.sort)
    const dispatch = useDispatch()

    const onCloseSortApp = (evt: MouseEvent) => {
        const target = evt.target as HTMLDivElement
        if (target && target.classList.contains('sort__active-sort-name')) {
            return
        }
        setShow(false)
    }
    const onKeyCloseSortApp = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            setShow(false)
        }
    }

    const onKeyEnter = (
        evt: React.KeyboardEvent<HTMLDivElement>,
        currentSort: { name: string; value: string },
    ) => {
        if (evt.key === 'Enter') {
            dispatch(changeSort(currentSort))
            setShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', onCloseSortApp)
        document.addEventListener('keydown', onKeyCloseSortApp)
        return () => {
            document.removeEventListener('click', onCloseSortApp)
            document.removeEventListener('keydown', onKeyCloseSortApp)
        }
    }, [])

    return (
        <div className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b className="min-[1100px]:hidden 2xl:inline-block 2xl:whitespace-nowrap">
                    Сортировка по:
                </b>
                <button
                    type="button"
                    className="sort__active-sort-name"
                    onClick={() => setShow(!isShow)}
                >
                    {sort.name}
                </button>
            </div>
            {isShow && (
                <div className="sort__popup">
                    <ul>
                        {sortNames.map((item) => (
                            <li key={item.value}>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    className={item.value === sort.value ? 'active' : ''}
                                    onClick={() => dispatch(changeSort(item))}
                                    onKeyDown={(evt) => onKeyEnter(evt, item)}
                                >
                                    {item.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sort
