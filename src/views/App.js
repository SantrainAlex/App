import {  useEffect, useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./mobile/loginAndRegister/Login";
import Register from "./mobile/loginAndRegister/Register";
import Index from "./mobile";
import LstEvent from "./mobile/lstEvent";
import HomePage from "./mobile/homePage/HomePage";

const RedirectToLogin = () => {
        const navigate = useNavigate()
        useEffect(()=>{
            navigate('/Login')
        }, [navigate])
        return null
}


const App = () => {
    const isAuthenticated =  localStorage.getItem('currentUser');
    const [isConnected, setIsConnected] = useState(false)
    

    return(
        <BrowserRouter>
          <Routes>
        
            <Route
                path="/"
                element={<Index/>}
            />
            <Route
                path="/Login"
                element={<Login isConnected={() => {setIsConnected(true)}}/>}
            />
            <Route
                path="/Register"
                element={<Register/>}
            />
            <Route
                path="/HomePage"
                element={(isAuthenticated|| isConnected)  ? <HomePage/>: <RedirectToLogin/>}
            />
            <Route
                path="/lstEvent"
                element={(isAuthenticated|| isConnected)  ?  <LstEvent/>: <RedirectToLogin/>}
            />
          </Routes>
        </BrowserRouter>
    )
}
export default App;