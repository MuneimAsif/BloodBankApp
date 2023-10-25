type propsType = {
    options: string[],
    label: string,
    onchange ?: Function   
 }
 // using======
 // let a = ["Adil", "ahmed"]
 // <ARSelact options={a} label="testing" />
 export default function MNSelect(props: propsType) {
    const { options, label, onchange } = props
    return <>
       <label className="text-danger fw-bold">{label}</label>
       <select className="bg-secendry  w-25 text-center"
        onChange={(e) =>onchange? onchange(e.target.value):null} >
          {options.map((x, i) => <option value={x} key={i}>{x}</option>)}
       </select>
    </>
 }