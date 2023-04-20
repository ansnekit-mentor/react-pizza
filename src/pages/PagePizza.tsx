import React from 'react'
import axios from 'axios'
import qs from 'query-string'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories'
import PizzaBlock, { IPizzaBlock } from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort, { sortNames } from '../components/Sort'
import { RootState } from '../redux/store'
import { setCategoryId, setCurrentPage, setParams } from '../redux/slices/filterSlice'
import Paginate from '../components/Pagination'

const PagePizza = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)

    const { categoryId, sort, search, currentPage } = useSelector(
        (state: RootState) => state.filter,
    )

    const [items, setItems] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const skeletItems = Array(9).fill(1)

    const fetchItems = () => {
        setLoading(true)

        const config = {
            params: {
                category: categoryId || undefined,
                title: search || undefined,
                sort: sort.value,
                page: currentPage,
                limit: 4,
            },
        }

        axios
            .get('https://642c86dbbf8cbecdb4f2a883.mockapi.io/api/items', config)
            .then((res) => res.data)
            .then((data) => {
                setItems(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    // Если изменили параметры и был первый рендер
    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify(
                {
                    category: categoryId,
                    title: search,
                    sort: sort.value,
                    page: currentPage,
                    limit: 4,
                },
                { skipNull: true, skipEmptyString: true, sort: false },
            )
            navigate(`?${queryString}`)
        }

        isMounted.current = true

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort.value, categoryId, search, currentPage])

    // Первый рендер. Если есть параметры в урл, парсим их и записываем в redux
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search, { sort: false })
            const sortName = sortNames.find((el) => el.value === params.search)

            dispatch(setParams({ ...params, sort: sortName }))
            console.log(params)
            isSearch.current = true
        }
    }, [])

    // Запросить массив пиц только если первый рендер
    React.useEffect(() => {
        if (!isSearch.current) {
            fetchItems()
        }

        isSearch.current = false
    }, [sort.value, categoryId, search, currentPage])

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

            <Paginate
                className="mt-8"
                forcePage={currentPage - 1}
                pageCount={3}
                pageRangeDisplayed={4}
                onChangePage={(page) => dispatch(setCurrentPage(page + 1))}
            />
        </div>
    )
}

export default PagePizza
