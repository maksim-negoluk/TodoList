import Input from "../../shared/Inputs/InputBar/Input";
import AddButton from "../../shared/Buttons/AddButton/AddButton";
import {InputBlockWrapper, AddTodoBlock} from "./styles";
import {useRef, useState} from "react";

const InputBlock = ({addTask}) => {

	const [inputValue, setInputValue] = useState("")
	const todoText = useRef("")

	const handleGettingInput = (event) => {
		setInputValue(event.target.value)
	}

	const handleAddButtonClick = (event) => {
		addTask(inputValue)
		setInputValue("")
	}

	return (
		<InputBlockWrapper>
			<h1>Todo List</h1>
			<AddTodoBlock >
				<Input forwardRef={todoText} getInput={handleGettingInput} valueValue={inputValue}/>
				<AddButton taskName={inputValue} addTask={handleAddButtonClick}/>
			</AddTodoBlock >
		</InputBlockWrapper>
	)
}

export default InputBlock;