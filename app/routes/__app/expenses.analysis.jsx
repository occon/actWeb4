import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';
import { getExpenses } from '../../data/expenses.server';
import { useLoaderData, Link } from '@remix-run/react';
import Error from '../../components/util/Error';
import { requireUserSession } from '../../data/auth.server';

export default function ExpensesAnalysisPage(){

    const expenses = useLoaderData();
    const hasExpenses = expenses && expenses.length > 0;

    return(
        <main>
            {hasExpenses && (
                <section>
                    <Chart expenses={expenses} />
                    <ExpenseStatistics expenses={expenses}/>
                </section>
            )}
            {!hasExpenses && (
                <section id="no-expenses">
                    <Error title="No expenses have been added yet."/>
                    <p>
                        Start <Link to="/expenses">adding some</Link> today.
                    </p>
                </section>)}
        </main>
        );
}

export async function loader({request}) {
    const userId = await requireUserSession(request);

    const expenses = await getExpenses(userId);
    return expenses;
}

export function CatchBoundary() {

}