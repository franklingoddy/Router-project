import image from "../assets/download.png"
import union from "../assets/Union.png"
import instagram from "../assets/icons/Group 10.png"
import whatsapp from "../assets/icons/Group 9.png"
import twitter from "../assets/icons/Group 8.png"
import facebook from "../assets/icons/Group 7.png"
import sushi from "../assets/icons/download.png"
import {useNavigate} from "react-router-dom"


function Login (){
const navigate = useNavigate();
     return(
        <>
        <div className="loginPage">
           <img src={image} className="fix" alt="" />
                <div className="aboutA">
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Job vacancies</a>
                <a href="">FAQ</a>
                </div>
               <div className="btn">
               <button> <img src={union} alt="" /> Get Listed</button>
              <span>  <button onClick={() => (navigate("/Dashboard"))}>Login</button></span>
               </div>
         </div>
         <div className="Text"><p>Log in. <span> Businesses</span></p>
         <h6>See your customer's request</h6></div>
         <div className="form">
            <label >
                <p>Business Name</p>
                <input type="text" placeholder="Business Name" />
            </label>
            <label >
                <p>Password</p>
                <input type="password" placeholder="***********" />
            </label><br />
          </div>
           <div className="chk">
           <input type="checkbox"></input><p id="pag">Always keep me logged In   <span> Forgot password?</span></p>
           </div>
           <div className="button2">
       <button onClick={()=> (navigate("/Dashboard"))}>Login</button>
       </div>
       <div className="try">
       <p> Try another way? <span><a href="./Register">Create an account</a></span></p>
       </div>

       <footer>
        <div className="foot">
       <img src={sushi} alt="" />
       <p>Fixit.ng is Nigeria online and mobile <br /> service place connecting people and <br /> businesses</p>
          <a href="https://www.facebook.com"><img src={facebook} alt="" /></a>
          <a href="https://www.x.com"><img src={twitter} alt="" /></a>
          <a href="https://www.whatsapp.com"><img src={whatsapp} alt="" /></a>
          <a href="https://www.instagram.com"><img src={instagram} alt="" /></a>
        </div>
        <div className="more">
           <div id="nav">
            <p>Navigations</p>
            <p>About Us</p>
            <p> Contact Us</p>
            <p>Job Vacancies</p>
            <p>Pricing</p>
           </div>
           <div id="faq">
            <p>Useful Links</p>
            <p>Privacy Policy</p>
            <p>Terms Conditions</p>
            <p>FAQ</p>
           </div>
           <div id="use">
            <p>Users</p>
            <p>Add Business</p>
            <p>Remove Business </p>
            <p>Sign In</p>
            <p>Create Account</p>
            </div>
        </div>
       </footer>
      
          
        </>
             
           
    
     )
}
export default Login;