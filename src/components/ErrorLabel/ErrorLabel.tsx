import '../../styles/tokens.css'
import './errorLabel.css'

interface ErrorLabelProps{
    text : string;
}

export const ErrorLabel = ({text} : ErrorLabelProps)=>{
    return(
        <span className='errorLabel'>{text}</span>
    )
}