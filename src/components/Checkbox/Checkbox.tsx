import '../../styles/tokens.css';
import './checkbox.css';
import { FiCheck } from "react-icons/fi";


interface ChecboxProps{
    id: string;
    name: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

export const Checkbox = ({id, name, checked, disabled, onChange, label} : ChecboxProps)=>{

    return(
        <label  htmlFor={id} className='checkboxLabel'>
            <input 
                type='checkbox'
                className='checkboxInput'
                id={id}
                name={name}
                checked={checked}
                disabled= {disabled}
                onChange={onChange}
            />
            <span className='checkboxCheckmark'> <FiCheck /> </span>
            {label}
        </label>
    )
}