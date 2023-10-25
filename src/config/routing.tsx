import { BrowserRouter,Routes,Route } from "react-router-dom"
// import Home from "../screens/Home"
import DashboardPage from "../screens/dashboard"
import Login from "../screens/login"
import Signup from "../screens/signUp"
import Protected from "../screens/protceted"
import { Main } from "../screens/main"
import Donor from "../screens/donor"
import { Acceptor } from "../screens/acceptor"
// import Products from "../pages/products"
// import Cart from "../pages/cart"
export default function Routing(){
    return<>
<BrowserRouter>
<Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                <Route path="/main/:id" element={<Main />}/>
                <Route path="/" element={< Login />}/>
                <Route path="/donor" element={< Donor />}/>
                <Route path="/acceptor" element={< Acceptor />}/>
                <Route path="/signUp" element={< Signup />}/>
                <Route path="/protected/*" element={< Protected Screen={DashboardPage}/>}/>
                {/* <Route path='/products' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="dashboardPage/*" element={< DashboardPage />}/> */}
                {/* <Route path="/edit/:id" element={<AddForm/>}/> */}
</Routes>
</BrowserRouter>
    </> 
}
