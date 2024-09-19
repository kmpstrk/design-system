import '../../styles/tokens.css'
import { Color } from './Color'
import './colorPalette.css'


interface ColorPaletteProps{
    colors:  { name: string; hex: string }[];
}


export const ColorPalette = ({colors} : ColorPaletteProps)=>{
    return(
        <div className='colorPaletteContainer'>
            {colors.map((color) => (
                <Color key = {color.name} name = {color.name} hex= {color.hex} />
            ))}
        </div>
    )
}