import StyledCheckBox from "./styles"

const CheckBox = ({checked, handleCheckboxChange}) => {

	return (
		<StyledCheckBox>
			<input type="checkbox" defaultChecked={checked} onChange={() => handleCheckboxChange()}/>
		</StyledCheckBox>
	)

}

export default CheckBox;