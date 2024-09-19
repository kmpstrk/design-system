import './textInput.css'
import '../../styles/tokens.css'
import {ErrorLabel} from '../ErrorLabel/ErrorLabel'

interface TextInputProps{
    id: string;
    name: string;
    value: string;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
}

export const TextInput = ({id, value, name, label, disabled, required, placeholder} : TextInputProps)=>{

    return(
        <div className='textInputContainer'>
            {label && <label htmlFor={id} className={['textInputLabel', disabled ? ('textInputDisabledLabel') : ('')].join(' ')}> {label} </label>}
            <input 
                type='text'
                id = {id}
                value = {value}
                name={name}
                disabled={disabled}
                required= {required}
                placeholder={placeholder}
                className='textInputField'
            />
            {required && <ErrorLabel text= 'This field is required' />}
        </div>
        
    )
}