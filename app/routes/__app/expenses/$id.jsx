

import Modal from '~/components/util/Modal'
import ExpenseForm from '~/components/expenses/ExpenseForm';
import { useNavigate } from '@remix-run/react';
//import { getExpense } from '../../../data/expenses.server';
import { deleteExpense, updateExpense} from '../../../data/expenses.server';
import { redirect } from 'react-router-dom';
import { validateExpenseInput } from '../../../data/validation.server';

export default function UpdateExpensesPage(){
    
    const navigate = useNavigate();
    
    
    function closeHandler() {
        navigate('..');
    }
    
    return(
        <Modal onClose={closeHandler}>
            <ExpenseForm />
        </Modal>
        );
}

/* 
export async function loader({params}) {
    const expenseId = params.id;
    const expense = await getExpense(expenseId);
    return expense;
} */

export async function action({params, request}) {
    const expenseId = params.id;
    if ( request.method === 'PATCH' ) {
        
        const formData = await request.formData();
        const expenseData = Object.fromEntries(formData);
        
        try{
            validateExpenseInput(expenseData);
        } catch (error) {
            return error;
        }
        
        await updateExpense(expenseId, expenseData);
        return redirect('/expenses');
        
    } else if(request.method === 'DELETE'){
        await deleteExpense(expenseId);
        console.log(2);
        return redirect('/expenses');
    }
}