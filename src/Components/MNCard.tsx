type propsType ={
    arr:string[]
    }
    
    export default function MNCard (props:propsType){
        const {arr} = props 
        return<>
            <div className="card mx-auto" style={{width: "20rem"}}>
                <ul className="list-group list-group-flush">
               {
          arr.map((x,i)=>
                
                <li className="list-group-item text-danger" key={i}>{x}</li>
                )
               }
                </ul>
            </div>
        </>
    }