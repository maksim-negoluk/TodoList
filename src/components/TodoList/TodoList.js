import Todo from "../Todo/Todo";
import {TodoBlockWrapper} from "./style";

const TodoList = ({todo, deleteTask}) => {

	return (
			<TodoBlockWrapper>
				{todo.map((todo) => {
					return <Todo
						text={todo.text}
						checked={todo.checked}
						key={todo.key} id={todo.key}
						deleteTask={deleteTask}/>
				})}
			</TodoBlockWrapper>
	)
}

export default TodoList