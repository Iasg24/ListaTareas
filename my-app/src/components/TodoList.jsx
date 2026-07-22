import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'
import TodoItem from './TodoItem'



function TodoList() {
    return (

        <Fragment>
            <h1>Listado de Tareas</h1>
            <ul>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>

            </ul>
        </Fragment>   

//        <TodoItem/>
)
}

export default TodoList
