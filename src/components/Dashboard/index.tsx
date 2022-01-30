import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Pagination } from "../Pagination";

import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TransactionsTable/>
            <Pagination/>
        </Container>
    );
}