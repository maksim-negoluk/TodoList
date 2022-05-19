import styled from "styled-components";

const TodoWrapper = styled.div`
	align-items: center;
	border: 1px grey;
	border-style: dashed none;
	background: #e8ebe9;
	display: flex;
	justify-content: space-around;
	padding: 10px 0;
	width: 100%;
`
const TodoText = styled.input`
	${({isEditing}) => !isEditing && `
		background-color: rgba(0, 0, 0, 0);
  	border: none;
		flex: 0.6 0 0;
	`}
	${({isChecked}) => isChecked && `
		color: #2fc421;
		text-decoration: line-through;
	`}
`

const IconsBlock = styled.div`
	display: flex;
	justify-content: space-around;
	flex: 0.2 0 0;
`

export {TodoWrapper, TodoText, IconsBlock}