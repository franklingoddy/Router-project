import "./Register.css"
import image from "../assets/download.png"
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();

     return(
      <>
           <div className="navbar">
              <img className="lig"  src={image}alt="" />
              <div className="regA">
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Job vacancies</a>
                <a href="">FAQ</a>
                </div>
                <button onClick={()=> navigate("/Dashboard")}>Login</button>
        </div>
             <div className="regForm">
                 <h2>Register</h2>
                 <label >
                <p>First Name</p>
                <input type="text" placeholder="John" />
            </label>
            <label >
                <p>Last Name</p>
                <input type="text" placeholder="Samuel" />
            </label>
            <label >
                <p>Business Name</p>
                <input type="text" placeholder="Johns Business" />
            </label>
            <label >
                <p>Email Address</p>
                <input type="text" placeholder="JohnSamuel@gmailcom" />
            </label>
            <div className="shortInput">
               <label>
                <p>Phone</p>
                <input type="number" placeholder="+2348056432718" />
               </label>
               <label >
               <p>Location</p>
               <select>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                     <option value="Delta">Delta</option>
                   <option value="Ogun">Ogun</option>
                 </select>
               </label>
            </div>
            <div className="otherInput">
          <label>
          <p>Business Type</p>
            <select>
                  <option value="Software Engineering">Developer</option>
                  <option value="Abuja">Ui/UX</option>
                    <option value="Port Harcourt">Product Manager</option>
                     <option value="Delta">Data Analyst</option>
                   <option value="Ogun">CYber Security</option>
                 </select>
          </label>
               <label>
              <span> <p>Referral Code </p></span>
                <input type="number" placeholder="optional" /><br />
               </label>
            </div>
            <div className="LastInput">
            <label>
                <p>Password</p>
                <input type="password" placeholder="********" /><br />
               </label>
               <input type="checkbox"  />
               <p>Accept our <span> terms, conditions</span> and <span> privacy policy</span></p>
            </div>
            <div className="RegBtn">
                <button onClick={() => {navigate("/Login")}}>Register</button>
            </div>
             </div>
      </>
        
     )
}

export default Register