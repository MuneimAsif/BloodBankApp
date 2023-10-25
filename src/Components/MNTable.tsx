type propsType = {
    row: any[],
    col: any[]
}
// using====
// <ARTable row={[
//     { key: "id" },
//     { key: "roll" },
//     { key: "name" },
//     { key: "fname" }
// ]}
//     col={
//         [
//             { name: "Adil", id: 1, roll: "90", fname: "Abid" },
//             { name: "Adil", id: 1, roll: "90", fname: "Abid" },
//             { name: "Adil", id: 1, roll: "90", fname: "Abid" },
//             { name: "Adil", id: 1, roll: "90", fname: "Abid" },
//             { name: "Adil", id: 1, roll: "90", fname: "Abid" }

//         ]
//     }
// />

export default function MNTable(props: propsType) {
    const { row, col } = props
    return <>
        <table className="mx-auto  w-75 my-5 display-5 " border={2}>
            <thead className="bg-info">
                <tr>
                    {
                        row.map((x, i) => <th  key={i}>{x.key}</th>)
                    }
                </tr>
            </thead>
            <tbody className="bg-danger ">
                {
                    col.map((x, i) => 
                    <tr key={i}>{row.map((j,k)=> <td key={k}>{x[j.key]}</td>)}</tr>
                    )
                }
            </tbody>
        </table>
    </>
}