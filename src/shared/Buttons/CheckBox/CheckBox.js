import StyledCheckBox from "./styles"
import {useState} from "react";

const CheckBox = () => {
	const [checked, setChecked] = useState(false)
	const [className, changeClassName] = useState("not-checked")

	const handleCheckboxChange = () => {
		setChecked(() => !checked)
		checked ? changeClassName("checked") : changeClassName("not-checked")
	}

	return (
		<StyledCheckBox>
			<input className={className}
						 type="checkbox"
						 defaultChecked={checked}
						 onChange={() => handleCheckboxChange()}/>
		</StyledCheckBox>
	)

}

export default CheckBox;