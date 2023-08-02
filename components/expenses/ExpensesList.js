import { FlatList } from "react-native"
import ExpenseItem from "./ExpenseItem"

export default function ExpensesList({expenses}){
    return(
            <FlatList 
                data={expenses}
                renderItem={({item}) => <ExpenseItem expense={item} />}
                keyExtractor={item => item.id}
            />
    )
}