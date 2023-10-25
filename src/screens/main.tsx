import { useState, useEffect } from 'react'
import { fbGet } from '../config/firebase/FBMethods';
import { useParams } from 'react-router-dom';
import { Paper } from '@mui/material';

export const Main = () => {

    const params = useParams()
    const [allUsers, setAllUsers] = useState<any>([])
    const [loginData, setLoginData] = useState<any>({})
    const getAllData = () => {
        fbGet('users/').then((res: any) => {
            setAllUsers([...res])
        })
    }

    const getLoginData = ()=>{
        fbGet(`users/${params.id}`).then((res:any)=>{
            console.log(res);
            setLoginData({...res})
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

useEffect(() => {
        
        getAllData()
        getLoginData()
    }, [])

    return <>

        <div className="">
                 
          
         {   allUsers.map((x:any,i:any)=>{
            console.log();
            
            if(x.Category !== loginData[3]){
              if(x.BloodGroup == loginData[2]){
                 return <div className='d-flex  justify-content-center py-3'>
                    <Paper  sx={{padding:"30px",background:'transparent'}}>
                    <h1>{x.Name}</h1>
                    <h1>{x.Category}</h1>
                    <h1>{x.BloodGroup}</h1>
                    </Paper>
                 </div>    
                 }
             }
         })
        }

               
        </div>
    </>

}
        // return  <div key={i}>
        // //     <h1>{x.userName}</h1> 
        // //     <h1>{x.donorOrAcceptor}</h1> 
        // //     <h1>{x.bloodGroup}</h1> 
        // // </div>
        
    //   return <table key={i}  className="mx-auto w-100  my-2 display-6" border={2}>
    //     <thead>
    //         <tr>
    //             <th>Name</th>
    //             <th>Age</th>
    //             <th>Gender</th>
    //             <th>Category</th>
    //             <th>Blood Group</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         <tr>
    //             <td>{x.userName}</td>
    //             <td>{x.age}</td>
    //             <td>{x.gender}</td>
    //             <td>{x.donorOrAcceptor}</td>
    //             <td>{x.bloodGroup}</td>
    //         </tr>
    //     </tbody>
    //   </table>