import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbLogin } from "../config/firebase/FBMethods";
import MNInput from "../Components/MNInput";
import MNButton from "../Components/MNButton";
import { Paper } from "@mui/material";



export default function Login() {
    const [model, setModel] = useState<any>({});
    const navigate = useNavigate()

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };

    let LoginUser = () => {
        // console.log(model);
        fbLogin(model)
            .then((res: any) => {
                console.log(res);
                 navigate(`/main/${res.id}`)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return <>
        <div style={{  backgroundImage:'url(https://img.freepik.com/free-photo/woman-holding-heart-shaped-object_23-2150703674.jpg?t=st=1698158485~exp=1698162085~hmac=fdc0ebfcc703f70d3283b514bb876cd3a37005f4c12d541ac8bd47edb9e5bd4e&w=740)',backgroundColor:'#f0f2f5',backgroundRepeat:'no-repeat',backgroundSize:'cover',width:'100%',height:'100vh',display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div >
                <Paper sx={{padding:"30px",background:'transparent'}}>
                <div className="py-3">
                    <h1>Login</h1>
                </div>

                <div className="py-2">
                    <MNInput

                        value={model.Email}
                        onChange={(e: any) => fillModel("Email", e.target.value)}
                        label="Email"
                    />
                </div>
               
                <div className="py-2">
                    <MNInput
                        value={model.Password}
                        onChange={(e: any) => fillModel("Password", e.target.value)}
                        label="Password"
                    />
                </div>
                <div className="py-2">
                    <MNButton onClick={LoginUser} label="Login" />
                </div>
                <div className="">
                    <p className="text-white">Not Signed In Yet? <MNButton style={{color:"black"}} onClick={() => navigate('/signUp')} variant="text" label="Sign Up" /></p>
                </div>
                </Paper>
            </div>
        </div>
    </>

}