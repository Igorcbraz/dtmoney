import { 
    makeWidthFlexible,
    RadialChart
} from "react-vis";
import { useTransactions } from '../../../hooks/useTransactions';


export function DonutChart(){
    const { transactions } = useTransactions()
    const FlexibleRadialChart = makeWidthFlexible(RadialChart); 

    let categories = transactions.map(transaction => transaction.category); // add all transactions categories to an array
    categories = categories.filter((category, pos, array) => array.indexOf(category) === pos); // remove duplicate entries

    
    let categoriesObj: any = categories.reduce((ac,a) => ({...ac,[a]:{}}),{}); // convert array values to object keys (['a'] to a:'')
    /*   
        Makes subcategories with the transaction categories chosen by the user,
        and the values of the subcategories are the {deposits: number, withdraws: number, total: number}
        of the category in question
    */
    transactions.map((transaction, index, array) => {
        categories.map(category => {
            if(transaction.category === category){
                categoriesObj[category] = (array.reduce((acc,item) => {
                    if(item.category === category){
                        if(item.tipo === 'deposit') {
                            acc.deposits  += item.amount;
                            acc.total     += item.amount
                        } else {
                            acc.withdraws += item.amount;
                            acc.total     -= item.amount
                        }
                    }
                    return acc
                }, {
                    deposits: 0,
                    withdraws: 0,
                    total: 0,
                }));
            }
        });
    });  

    
    const colors = [
        '#E52E40',
        '#5429CC',
        '#33cc95',
        '#363F5F'
    ]
    const data = [
        { angle: 1, color: colors[0] }, 
        { angle: 2, color: colors[1] }, 
        { angle: 6, color: colors[2] }
    ]

    return(
        <FlexibleRadialChart
            colorType="literal"
            innerRadius={90}
            radius={120}
            data={data}
            animation={"gentle"}
            height={300}
        />
    )
}