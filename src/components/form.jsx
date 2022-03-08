import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form =({input,setInput,todos,setTodos ,editTodo,setEditTodo})=>{
    const onInputChange=(event)=>{
        setInput(event.target.value);
        
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        // if(!editTodo){
        //     setTodos([...todos,{id:uuidv4(),tittle:input,completed:false}]);
        //     setInput('');
        // }else{
        //     updateTodo(input,editTodo.id,editTodo.completed)
        // }
        setTodos([...todos,{id:uuidv4(),tittle:input,completed:false}]);
        setInput('');
    }
    return(
        <form onSubmit={onFormSubmit}> 
            <input 
            type="text" 
            placeholder="Enter a todo..." 
            className="takeInput"
            value={input}
            required
            onChange={onInputChange}
            
            />
            <button className="button-add" type="submit">Add</button>
            <button className="button-get-data" type="submit">Get todos</button>
        </form>
    )
}
export default Form;