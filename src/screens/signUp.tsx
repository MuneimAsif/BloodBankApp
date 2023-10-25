import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbSignup } from "../config/firebase/FBMethods";
import MNInput from "../Components/MNInput";
import MNButton from "../Components/MNButton";
import { Paper } from "@mui/material";



export default function Signup() {
    const [model, setModel] = useState<any>({});

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
        console.log(model);

    };

    const navigate = useNavigate();

    let signUpUser = () => {
        fbSignup(model)
            .then((res: any) => {
                navigate("/");
                console.log(res);
            }).catch((err: any) => {
                console.log(err);
            });
    };

    return (
        <>


            <div style={{ backgroundImage: `url('https://www.jotform.com/uploads/ugurg/form_files/Screen%20Shot%202023-07-23%20at%2023.25.31.64bd8d030294d5.48528883.png')`, backgroundColor: '#f0f2f5', width: '100%', height: '100%' }}>
                <div>

                <div className="container">
                   <div className="row">

                   <div className="col-lg-6 col-md-4 col-12">
                    <div style={{height:'100%'}} className="d-flex align-items-center justify-content-center">
                       <div className="my-5">

                         <h1 className="my-3" style={{fontFamily:'cursive',color:'#FFFFCC'}}>Life Savers !</h1>
                         
                         <h6 className="my-3" style={{fontStyle:"italic",letterSpacing:'2px'}}>"Give Blood Take Blood"</h6>
                         <h5 style={{fontWeight:'lighter'}}>Confidential - Please answer the following questions correctly. This will help to protect you and the patient who receives your blood. 
                        </h5>
                       </div>
                       </div>
                   </div>


                    <div className="col-lg-6 col-md-8 col-12">

                        <Paper sx={{ marginBlock:'50px',padding: "20px", background: 'transparent' }}>
                            <div className="my-1" style={{ textIndent: '12px' }}>
                                <h1 style={{color:'#FFFFCC'}}>Sign Up</h1>    
                            </div>


                            <MNInput
                                id='inputs'  
                                style={{ marginBlock: '5px', marginInline: '10px', width: '45%' }}
                                value={model.Name}
                                onChange={(e: any) => fillModel("Name", e.target.value)}
                                label="User Name"
                            />



                            <MNInput
                                id='inputs'  
                                style={{ marginBlock: '5px', marginInline: '10px', width: '45%' }}
                                value={model.Contact}
                                onChange={(e: any) => fillModel("Contact", e.target.value)}
                                label="Contact No"
                                type="number"
                            />



                            <MNInput
                                id='inputs'  
                                style={{ marginBlock: '5px', marginInline: '10px', width: '45%' }}
                                value={model.Cnic}
                                onChange={(e: any) => fillModel("Cnic", e.target.value)}
                                label="CNIC"
                                type="number"
                            />

                            <MNInput
                                id='inputs'  
                                style={{ marginBlock: '5px', marginInline: '10px', width: '45%' }}
                                value={model.Address}
                                onChange={(e: any) => fillModel("Address", e.target.value)}
                                label="Address"
                            />

                            <MNInput
                                id='inputs'  
                                type="email"
                                style={{ marginBlock: '5px', marginInline: '10px', width: '45%' }}
                                value={model.Email}
                                onChange={(e: any) => fillModel("Email", e.target.value)}
                                label="Email"
                            />

                            <MNInput
                                id='inputs'  
                                style={{ marginBlock: '5px', marginInline: '10px', width: '45%' }}
                                value={model.Password}
                                type="password"
                                onChange={(e: any) => fillModel("Password", e.target.value)}
                                label="Password"
                            />

                            <select style={{ color: 'rgba(0,0,0,0.5', padding: '12px', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '5px', background: 'transparent', marginBlock: '10px', marginInline: '10px', width: "45%" }} value={model.BloodGroup} onChange={(e: any) => fillModel("BloodGroup", e.target.value)}>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="A+">A+</option>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="A-">A-</option>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="B+">B+</option>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="B-">B-</option>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="AB+">AB+</option>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="AB-">AB-</option>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="O+">O+</option>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="O-">O-</option>
                            </select>

                            <select style={{ color: 'rgba(0,0,0,0.5', padding: '12px', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '5px', background: 'transparent', marginBlock: '10px', marginInline: '10px', width: "45%" }} value={model.Age} onChange={(e: any) => fillModel("Age", e.target.value)}>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="above18">Above 18</option>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="below18">Below 18</option>
                            </select>

                            <select style={{ color: 'rgba(0,0,0,0.5', padding: '12px', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '5px', background: 'transparent', marginBlock: '10px', marginInline: '10px', width: "45%" }} value={model.Category} onChange={(e: any) => fillModel("Category", e.target.value)}>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="bloodDonor">Blood Donor</option>
                                <option style={{ background: '#c14e33', color: 'rgba(0,0,0,0.6' }} value="bloodAcceptor">Blood Acceptor</option>
                            </select>

                            <div>
                                <label  style={{ textIndent: '12px' }}>Male</label>
                                <MNInput id='inputs' label="Male" name="gender" value='male' onChange={(e: any) => fillModel('Gender', e.target.value)} style={{marginInline: '10px' }} type="radio" />
                                <label style={{ textIndent: '12px' }}>Female</label>
                                <MNInput id='inputs' name="gender" value='female' onChange={(e: any) => fillModel('Gender', e.target.value)} style={{  marginInline: '10px', border: 'none', outline: 'none' }} type="radio" />
                            </div>


                            <div className="my-1" style={{ textIndent: '12px' }}>
                                Already have an account ? <MNButton style={{ color: 'white' }} onClick={() => navigate("/")} label="Login" variant="text" />
                            </div>
                            <div style={{ textIndent: '12px' }}>
                                <MNButton style={{ backgroundColor: '#c14e33' }} onClick={signUpUser} label="Sign Up" />
                            </div>
                        </Paper>

                    </div>
                      
                    </div>
                    </div>

                </div>
            </div>


        </>
    );
}   