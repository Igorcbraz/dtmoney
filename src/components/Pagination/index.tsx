import { useEffect, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { calculateRange } from '../../utils/FormatPaginationTransactions';
import { CSVLink } from "react-csv";

import ExcelLogo from '../../assets/excel-logo.svg';

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

    // CSV config
    const csvTransactions = transactions.map((transaction) => {
      return {
        title: transaction.title,
        amount: `${transaction.tipo === 'withdraw' ? '-' : '' } ${
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(Number(transaction.amount))
        }`,
        category: transaction.category,
        payer: transaction.payer,
        createdAt: `${new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}`
      }
    });

    const headers = [
        { label: "Título", key: "title" },
        { label: "Valor", key: "amount" },
        { label: "Categoria", key: "category" },
        { label: "Pagador(a)", key: "payer" },
        { label: "Data", key: "createdAt" }
    ];

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

            <CSVLink data={csvTransactions} headers={headers} id="csv">
                <img src={ExcelLogo} alt="Excel logo" />
                Baixar .CSV
            </CSVLink>

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