import '../../styles/tokens.css'
import './typography.css'

interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'p';
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
  }
  
export const Typography = ({variant, children, color} : TypographyProps) => {
    const Tag = variant;
    const clr = color ? (color) : ('primary');

    return (
        <Tag className={['typography', `typography_${variant}`, `typography_${clr}`].join(' ')}>
            {children}
        </Tag>
    );
}