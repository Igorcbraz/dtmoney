import { useEffect, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { calculateRange } from '../../utils/FormatPaginationTransactions';

import { Container, PaginationStyle, RangePagination } from './style';


export function Pagination(){
    const { transactions, setCurrentPage, currentPage, rangePagination, setRangePagination } = useTransactions();
    const [paginationRange, setPaginationRange] = useState<number[]>([])
    const [contPagination, setContPagination] = useState(0)


    useEffect(() => {
        setPaginationRange(calculateRange(transactions, rangePagination))
    }, [transactions, rangePagination])

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
            <RangePagination>
                <label>Linhas por página</label>
                <input 
                    type="number" placeholder='5'
                    onChange={event => setRangePagination(Number(event.target.value))}
                    value={rangePagination}
                />
            </RangePagination>
            <PaginationStyle>
                <button 
                    className={`arrows ${paginationRange.length < 5 && `buttonDisabled`}`}
                    onClick={handleBackPage}
                    disabled={paginationRange.length < 5 ? true : false}
                >
                    &#60;
                </button>

                {paginationRange[contPagination] && (
                    <button 
                        onClick={() => setCurrentPage(paginationRange[contPagination] - 1)}
                        className={currentPage === paginationRange[contPagination] - 1 ? 'active' : ''}
                    >
                        {paginationRange[contPagination]}
                    </button>
                )}
                {paginationRange[contPagination + 1] && (
                    <button 
                        onClick={() => setCurrentPage(paginationRange[contPagination])}
                        className={currentPage === paginationRange[contPagination] ? 'active' : ''}
                    >
                        {paginationRange[contPagination + 1]}
                    </button>
                )}
                {paginationRange[contPagination + 2] && (
                    <button 
                    onClick={() => setCurrentPage(paginationRange[contPagination + 1])}
                    className={currentPage === paginationRange[contPagination + 1] ? 'active' : ''}
                    >
                        {paginationRange[contPagination + 2]}
                    </button>
                )}
                {paginationRange[contPagination + 3] && (
                    <button
                    onClick={() => setCurrentPage(paginationRange[contPagination + 2])}
                    className={currentPage === paginationRange[contPagination + 2] ? 'active' : ''}
                    >
                        {paginationRange[contPagination + 3]}
                    </button>
                )}
                {paginationRange[contPagination + 4] && (
                    <button
                    onClick={() => setCurrentPage(paginationRange[contPagination + 3])}
                    className={currentPage === paginationRange[contPagination + 3] ? 'active' : ''}
                    >
                        {paginationRange[contPagination + 4]}
                    </button>
                )}
                

                <button 
                    className={`arrows ${paginationRange.length < 5 && `buttonDisabled`}`}
                    onClick={handleNextPage}
                    disabled={paginationRange.length < 5 ? true : false}
                >
                    &#62;
                </button>
            </PaginationStyle>
        </Container>
    )
}