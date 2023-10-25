// import * as React from 'react';
import { TextField } from "@mui/material"
type propsType = {
    type?: "text" | "number" | "file" | "password" | "email" | "date" | "radio" | "checkbox",
    style?: {}
    styleTheem?: "light" | "dark"
    value?: any
    label?:string
    onChange?:any
    disabled?:any
    variant?: "outlined" | "filled" |"standard",
    name?:string,
    id?:(string|number)
}

export default function MNInput(props: propsType) {
    const { disabled,label,type,onChange,style, styleTheem, value,variant,name } = props
    return <>
        <TextField
        disabled= {disabled}
        name={name}
            variant={variant}
            style={style}
            type={type??'text'}
          placeholder={label}
            value={value}
            onChange={onChange}
        />
    </>
}


// type propsType = {
//     label: string;
//     onChange?: any;
//     type?: string;
//     value?: any;
// };

// export default function BAInput(props: propsType) {
//     const { label, onChange, type, value } = props;
//     return (
//         <input
//             className="p-3   outline-none  "
//             placeholder={label}
//             value={value}
//             onChange={onChange}
//             type={type ?? "text"}
//         />
//     );
// }