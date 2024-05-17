import Login from "./Components/Login"
import Register from "./Components/Registration"
import Dashboard from "./Components/DashBoard"
import Empty from "./Components/EmptyPage"
import {BrowserRouter, Routes,Route} from "react-router-dom"



function App(){
    return(
     <BrowserRouter>
    <Routes>
      <Route index element= {<Register/>}></Route>
      <Route path = "/Login" element = {<Login/>}></Route>
      <Route path = "/Register" element = {<Register/>}></Route>
      <Route path = "/Dashboard" element = {<Dashboard/>}></Route>
      <Route path = "*" element = {<Empty/>}></Route>
    </Routes>
      </BrowserRouter>
   
    )
}

export default App
