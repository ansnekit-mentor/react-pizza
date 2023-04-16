import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import SearchIcon from '../assets/img/search.svg'
import CloseIcon from '../assets/img/close.svg'
import { changeSearch } from '../redux/slices/filterSlice'

const Search = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = React.useState('')
    const searchInp = React.useRef<HTMLInputElement>(null)

    const onClearSearch = () => {
        setSearch('')

        if (searchInp.current) {
            searchInp.current.focus()
        }
    }

    const updateSearchValue = React.useCallback(
        debounce((value: string) => {
            dispatch(changeSearch(value))
        }, 500),
        [],
    )

    const onChangeSearch = (evt: ChangeEvent) => {
        const target = evt.target as HTMLInputElement
        setSearch(target.value)
        updateSearchValue(target.value)
    }

    return (
        <div className="header__search flex items-center border border-1 rounded-2xl border-slate-900 h-9">
            <img className="ml-2" width="24" src={SearchIcon} alt="Search icon" />
            <input
                ref={searchInp}
                type="text"
                className="mx-1 focus:outline-none active:outline-none"
                name="search"
                id="search"
                value={search}
                placeholder="Поиск пиццы"
                onChange={onChangeSearch}
            />
            {search && (
                <button type="button" className="mr-2 rounded-full" onClick={onClearSearch}>
                    <img className="" width="24" src={CloseIcon} alt="Search icon" />
                </button>
            )}
        </div>
    )
}

export default Search
