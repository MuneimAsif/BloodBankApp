import { Button } from '@mui/material';
type propsType = {
    variant?:string,
    label?: string,
    onClick?:any,
    style?:any
    // theme?: "light" | "dark",
    color?: "error" | "info" | "inherit" | "primary" | "secondary" | "success" | "warning"
}
export default function MNButton(props: propsType) {
    const { style,label, onClick, color,variant } = props

    return <>
        <Button
        
            variant = {variant ?? 'contained'}
            color={color}
            style={ style
                // theme == "dark" ?
                //     { backgroundColor: "darkblue" }
                //     : { backgroundColor: "lightseagreen" }
            }
            onClick={onClick}>{label}</Button>
    </>
}