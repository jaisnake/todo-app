import React from "react";
const TodoList =({todos,setTodos})=>{


    //handle complete todo
    const handelComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return {...item,completed:!item.completed}
                }
                return item;
            })
            )
    }
    //handle edit functionality;
    
    //handling delete functonality
    const handelDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }
    return(
        <div>
           {
               todos.map((todo)=>(
                   
                   <li className="list-item" key ={todo.id}>
                        <input type="text" value={todo.tittle} className={`list ${todo.completed?'complete':""}`} onChange={(event)=>event.preventDefault()}/>
                        <button className="button-complete task-button" onClick={()=>handelComplete(todo)}>
                        <i className="fa fa-check-circle"></i>
                        </button>
                        {/* <button className="button-edit task-button" onClick={()=>handelEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button> */}
                        <button className="button-delete task-button" onClick={()=>handelDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                   </li>
               ))
           }
        </div>
    )
}
export default TodoList;