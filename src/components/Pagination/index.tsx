import { useEffect, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { calculateRange } from '../../utils/FormatPaginationTransactions';

import { Container } from './style';


export function Pagination(){
    const { transactions, setCurrentPage, currentPage } = useTransactions();
    const [paginationRange, setPaginationRange] = useState<number[]>([])
    const [contPagination, setContPagination] = useState(0)

    useEffect(() => {
        setPaginationRange(calculateRange(transactions, 5))
    }, [transactions])
    

    function handleNextPage(){
        if(paginationRange[contPagination + 5] !== undefined) {
            setContPagination(contPagination + 1)
        }
    }
    function handleBackPage(){
        if(paginationRange[contPagination - 1] !== undefined) {
            setContPagination(contPagination - 1)
        }
    }

    return(
        <Container>
            <button onClick={handleBackPage}>&#60;</button>

            <button 
                onClick={() => setCurrentPage(paginationRange[contPagination] - 1)}
                className={currentPage === paginationRange[contPagination] - 1 ? 'active' : ''}
            >
                {paginationRange[contPagination]}
            </button>
            <button 
                onClick={() => setCurrentPage(paginationRange[contPagination])}
                className={currentPage === paginationRange[contPagination] ? 'active' : ''}
            >
                {paginationRange[contPagination + 1]}
            </button>
            <button 
                onClick={() => setCurrentPage(paginationRange[contPagination + 1])}
                className={currentPage === paginationRange[contPagination + 1] ? 'active' : ''}
            >
                {paginationRange[contPagination + 2]}
            </button>
            <button
                onClick={() => setCurrentPage(paginationRange[contPagination + 2])}
                className={currentPage === paginationRange[contPagination + 2] ? 'active' : ''}
            >
                {paginationRange[contPagination + 3]}
            </button>
            <button
                onClick={() => setCurrentPage(paginationRange[contPagination + 3])}
                className={currentPage === paginationRange[contPagination + 3] ? 'active' : ''}
            >
                {paginationRange[contPagination + 4]}
            </button>

            <button onClick={handleNextPage}>&#62;</button>
        </Container>
    )
}