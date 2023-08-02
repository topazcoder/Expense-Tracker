import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/expenses/ExpenseOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

export default function RecentExpenses() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { expenses, setExpenses } = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      try{
      const expenses = await fetchExpenses();
      setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses");
      }
      setIsLoading(false);
    }
    getExpenses();
  }, []);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo;
  });
  

  if(error && !isLoading) {
    return <ErrorOverlay message={error} />
  }

  if(isLoading) {
    return <LoadingOverlay />
  }

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 days"} />
  );
}
