import './textArea.css'
import '../../styles/tokens.css'
import {ErrorLabel} from '../ErrorLabel/ErrorLabel'

interface TextAreaProps{
    id: string;
    name: string;
    value: string;
    placeholder?: string;
    rows? : number;
    cols? : number;
    maxlength? : number;
    label?: string;
    disabled?: boolean;
    required?: boolean;
}

export const TextArea = ({id, value, name, rows, cols, maxlength, label, disabled, required, placeholder} : TextAreaProps)=>{

    return(
        <div className='textAreaContainer'>
            {label && <label htmlFor={id} className={['textAreaLabel', disabled ? ('textAreaDisabledLabel') : ('')].join(' ')}> {label} </label>}
            <textarea 
                className='textAreaField'
                id={id}
                placeholder={placeholder} 
                value={value} 
                name={name}
                rows={rows}
                cols={cols}
                maxLength={maxlength}
                disabled={disabled}
            ></textarea>
           
            {required && <ErrorLabel text= 'This field is required' />}
        </div>
        
    )
}