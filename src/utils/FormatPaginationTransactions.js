export function calculateRange(transactions, rowsPerPage){
    const range = [];
    const num = Math.ceil(transactions.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
};

export function FormatPaginationTransactions(transactions, size = 5){
    const formattedTransactions = [];
    for (let i = 0; i < transactions.length; i += size) {
        formattedTransactions.push(transactions.slice(i, i + size));
    }

    return formattedTransactions;
}