import TodoList from "../TodoList/TodoList";
import InputBlock from "../InputBlock/InputBlock";
import {AppWrapper} from "./style";
import {useState} from "react";
import {nanoid} from "nanoid";

const App = () => {

	const [todo, setTodo] = useState([
		{text: "todo1", key: nanoid()},
		{text: "todo2", key: nanoid()}
	])

	const deleteTask = (id) => {
		setTodo(todo.filter((task) => id !== task.key))
	}

	const addTask = (taskText) => {
		const newTodo = {text: taskText, key: nanoid()}
		setTodo([...todo, newTodo])
	}

	return (
		<AppWrapper>
			<InputBlock addTask={addTask}/>
			<TodoList todo={todo} deleteTask={deleteTask}/>
		</AppWrapper>
	)
}

export default App;
