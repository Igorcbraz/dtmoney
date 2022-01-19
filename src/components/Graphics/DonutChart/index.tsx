import { 
    makeWidthFlexible,
    RadialChart
} from "react-vis";
import { useTransactions } from '../../../hooks/useTransactions';

import { Container } from './styles';

interface categoryData{ 
    deposits: number;
    withdraws: number;
    total: number;
    name: string;
}
interface FlexibleRadialChartData{
    angle: string;
    color: string;
}

export function DonutChart(){
    const { transactions } = useTransactions()
    const FlexibleRadialChart = makeWidthFlexible(RadialChart); 

    let categories = transactions.map(transaction => transaction.category); // add all transactions categories to an array
    categories = categories.filter((category, pos, array) => array.indexOf(category) === pos); // remove duplicate entries
    
    let categoriesObj: any = categories.reduce((ac,a) => ({...ac,[a]:{}}),{});// convert array values to object keys (['a'] to a:'')
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
                    return acc;
                }, {
                    deposits: 0,
                    withdraws: 0,
                    total: 0,
                }));
            }
        });
    });  
    const categoriesArr = Object.keys(categoriesObj).map(key => { // convert object containing Objects into array of objects
        return {
            deposits: categoriesObj[key].deposits,
            withdraws: categoriesObj[key].withdraws,
            total: categoriesObj[key].total,
            name: key
        };
    })
    
    const colors = [
        '#E52E40',
        '#33cc95',
        '#5429CC',
        '#363F5F'
    ]
    const data = categoriesArr.map((category: categoryData, index: number) => {
        return {
            angle: category.withdraws,
            color: colors[index]
        } 
    })

    return(
        <Container>
            <div>
                <h2>Despesas por categoria</h2>
                <FlexibleRadialChart
                    colorType="literal"
                    innerRadius={90}
                    radius={120}
                    data={data}
                    animation={"gentle"}
                    height={300}
                />
            </div>

            <div className="categories">
                {categoriesArr.map((category: categoryData, index: number) => {
                    return (
                        <div id="category">
                            <h4 style={{color: colors[index]}}>{category.name}</h4>
                            <p>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(Number(category.withdraws))}</p>
                        </div>
                    )
                })}
            </div>
            
        </Container>
        
    )
}