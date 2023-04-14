import React from 'react'
import ReactPaginate from 'react-paginate'
import classes from './pagination.module.scss'

export interface IPaginate extends React.HTMLAttributes<HTMLDivElement> {
    pageCount: number
    pageRangeDisplayed: number
    onChangePage: (value: number) => void
}

const Paginate = ({ pageCount, pageRangeDisplayed, onChangePage, ...attrs }: IPaginate) => {
    return (
        <div {...attrs}>
            <ReactPaginate
                className={classes.root}
                previousLabel="<"
                nextLabel=">"
                onPageChange={({ selected }) => onChangePage(selected + 1)}
                pageRangeDisplayed={pageRangeDisplayed}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                breakLabel="..."
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Paginate
