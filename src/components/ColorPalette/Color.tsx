import '../../styles/tokens.css'
import { Typography } from '../Typography/Typography'
import './colorPalette.css'

interface ColorProps{
    name : string,
    hex: string,
}

export const Color = ({name, hex} : ColorProps)=>{
    return(
        <div className='colorContainer'>
            <div className='color' style={{background: hex}}></div>
            <div className='colorInfo'>
                <Typography variant='p' children = {name} />
                <Typography variant='p' children = {hex} color='secondary'/>
            </div>
        </div>
    )
}