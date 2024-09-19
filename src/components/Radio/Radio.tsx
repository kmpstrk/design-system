import './radio.css'
import '../../styles/tokens.css'

interface RadioProps{
    id: string;
    name: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}
export const Radio = ({id, name, value, checked, disabled, onChange, label} : RadioProps)=>{

    return (
        <label htmlFor = {id} className={['radio_label', disabled ? ('radio_label_disabled') : ('')].join(' ')}>
            <input
                type="radio"
                className='radio_input'
                id={id}
                name={name}
                value={value}
                checked={checked}
                disabled= {disabled}
                onChange={onChange}
            />
            <span className="radio_button"></span>
            {label}
        </label>
       
    )
}