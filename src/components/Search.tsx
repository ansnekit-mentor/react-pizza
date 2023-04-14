import React from 'react'
import SearchIcon from '../assets/img/search.svg'
import CloseIcon from '../assets/img/close.svg'

const Search = () => {
    const [search, setSearch] = React.useState('')

    return (
        <div className="header__search flex items-center border border-1 rounded-2xl border-slate-900 h-9">
            <img className="ml-2" width="24" src={SearchIcon} alt="Search icon" />
            <input
                type="text"
                className="mx-1 focus:outline-none active:outline-none"
                name="search"
                id="search"
                value={search}
                placeholder="Поиск пиццы"
                onChange={(evt) => setSearch(evt.target.value)}
            />
            {search && (
                <button type="button" className="mr-2 rounded-full" onClick={() => setSearch('')}>
                    <img className="" width="24" src={CloseIcon} alt="Search icon" />
                </button>
            )}
        </div>
    )
}

export default Search
