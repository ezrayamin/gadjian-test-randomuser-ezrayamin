import React from 'react'

const Pagination = ({totalData, changePage, dataPerPage, currentPage}) => {
    const firstPage = 1
    const lastPage = totalData / dataPerPage

    let previousPage = parseInt(currentPage) - 1
    let nextPage = parseInt(currentPage) + 1

    const goTo = (selectedPage) => {
        changePage(selectedPage)
    }

    return (
        <div className="pagination-container">
            <button className="pagination-button" onClick={() => goTo(previousPage)} disabled={currentPage === firstPage}><i className="fas fa-chevron-left"></i> Previous Page</button>
            <button className="pagination-button" onClick={() => goTo(nextPage)} disabled={currentPage === lastPage}>Next Page <i className="fas fa-chevron-right"></i> </button>
        </div>
    )
}

export default Pagination