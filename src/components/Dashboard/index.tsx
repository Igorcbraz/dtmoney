import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Pagination } from "../Pagination";

import { Container } from "./styles";

interface DashboardProps{
    hasTransactions: boolean;
    setHasTransactions: (hasTransactions: boolean) => void;
}
export function Dashboard({ hasTransactions, setHasTransactions }: DashboardProps){
    return(
        <Container>
            <Summary/>
            <TransactionsTable hasTransactions={hasTransactions} setHasTransactions={setHasTransactions}/>
            <Pagination hasTransactions={hasTransactions}/>
        </Container>
    );
}