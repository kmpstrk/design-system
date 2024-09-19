import './button.css'
import '../../styles/tokens.css'

interface ButtonProps { 
    label : string;
    primary?: boolean;
    disabled?: boolean;
    size : 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export const Button = ({label, primary, disabled, size, onClick} : ButtonProps)=>{
    const mode = primary ? ('button_primary') : ('button_secondary');
    const isDisabled = disabled ? (true) : (false);
    
    return(
        <button type='button' className={['button', mode, `button_${size}`].join(' ')} disabled={isDisabled} onClick={onClick}>
            {label}
        </button>
    )
}