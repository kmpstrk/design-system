import '../../styles/tokens.css'
import './toggle.css'

interface ToggleProps{
    id: string;
    name: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

export const Toggle = ({id, name, disabled, label, checked, onChange} : ToggleProps)=>{
    return(
        <div className='toggleContainer'>
            <label className="toggleSwitch">
                <input
                    type="checkbox"
                    className="toggleInput"
                    id={id}
                    name= {name}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <span className="toggleSlider"></span>
            </label>
            <span className={["toggleText", disabled ? ('toggleTextDisabled') : ('')].join(' ')}>{label}</span>
        </div>
    )
}