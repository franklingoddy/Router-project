import two from "../assets/sideBar icons/second.png"
import three from "../assets/sideBar icons/Third.png"
import four from "../assets/sideBar icons/Fourth.png"
import five from "../assets/sideBar icons/Fifth.png"
import six from "../assets/sideBar icons/Sixt.png"
import seven from "../assets/sideBar icons/Seventh.png"
import eight from "../assets/sideBar icons/Eight.png"
import nine from "../assets/sideBar icons/Nineth.png"
import ten from "../assets/sideBar icons/Ten.png"



function Sidebar(){
   return(
    <div>
    <div className="sidebar">
  <div className="two">
  <img src={two} alt="" />
  <p>Dashboard</p>
   </div>

   <div className="three">
  <img src={three} alt="" />
  <p>Pending request</p>
   </div>

   <div className="four">
  <img src={six} alt="" />
  <p>Pending Approval</p>
   </div>

   <div className="five">
  <img src={four} alt="" />
  <p>Completed services</p>
   </div>

   <div className="six">
  <img src={five} alt="" />
  <p> Canceled services</p>
   </div>

   <div className="seven">
  <img src={six} alt="" />
  <p>Listings</p>
   </div>

   <div className="eight">
  <img src={seven} alt="" />
  <p> Messages</p>
   </div>

   <div className="nine">
  <img src={nine} alt="" />
  <p>Subscriptions</p>
   </div>

   <div className="ten">
  <img src={ten} alt="" />
  <p>Profile</p>
  </div>
  </div>

</div>
   )
}



export default Sidebar