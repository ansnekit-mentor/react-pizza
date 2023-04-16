import React from 'react'
import ReactPaginate from 'react-paginate'
import classes from './pagination.module.scss'

export interface IPaginate extends React.HTMLAttributes<HTMLDivElement> {
    pageCount: number
    pageRangeDisplayed: number
    forcePage: number
    onChangePage: (value: number) => void
}

const Paginate = ({
    pageCount,
    pageRangeDisplayed,
    forcePage,
    onChangePage,
    ...attrs
}: IPaginate) => {
    return (
        <div {...attrs}>
            <ReactPaginate
                className={classes.root}
                previousLabel="<"
                nextLabel=">"
                onPageChange={({ selected }) => onChangePage(selected)}
                pageRangeDisplayed={pageRangeDisplayed}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                forcePage={forcePage}
                breakLabel="..."
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Paginate
