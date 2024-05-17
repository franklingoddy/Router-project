import "./Dashboard.css"
import Eye from "../assets/Eye.png"
import six from "../assets/sideBar icons/Sixt.png"
import ell7 from "../assets/ecllipse/Ellipse 7.png"
import ell9 from "../assets/ecllipse/Ellipse 9.png"
import four from "../assets/sideBar icons/Fourth.png"
import seven from "../assets/sideBar icons/Seventh.png"
import nine from "../assets/sideBar icons/Nineth.png"
import Sidebar from "../Components/Sidebar"
import search from "../assets/ecllipse/search.png"
import fixit from "../assets/download.png"
import notify from "../assets/ecllipse/Notify.png"
import vector from "../assets/ecllipse/Vector.png"
import ell10 from "../assets/ecllipse/Ellipse 10.png"



function Dashboard(){
    return(
           
        <>
         <div className="nav">
         <img src={fixit} alt="" />

         <div className="searchBar">
          <img src={search} alt="" />
          <input type="text"  placeholder="search or type any command "/>
         </div>
        <div className="notify">
        <img  src={notify} alt=""  />
         <button><img src={vector} alt="" /><span>Add to list</span> </button>
         <img src={ell10} alt="" className="profile" />
        </div>
         </div>
        <div className="Dashboard">
            <Sidebar/>
            <div className="cash">
            <span><p>Available Balance</p></span>
            <h1>₦120,000   <img src={Eye} alt="" /></h1>
            <div className="Box1">
            <div id="bx1">
            <p>Active listings <img src={six} alt="" /></p>
            <h2>20</h2>
            <h5>Total active listings</h5>
            </div>
            <div id="bx2">
            <p>Ongoing services <img src={six} alt="" /></p>
            <h2>15</h2>
            <h5>Total ongoing services</h5>
            </div>
            <div id="bx3">
            <p>Completed services <img src={ell9} alt="" /></p>
            <h2>10</h2>
            <h5>Total completed services</h5>
            </div>
            <div id="bx4">
            <p>Canceled services <img src={ell7} alt="" /></p>
            <h2>0</h2>
            <h5>Total Canceled services</h5>
            </div>
            </div>
            <div className="Box2">
           <div id="bx5">
           <p>Pending request <img src={six} alt="" /></p>
            <h2>7</h2>
            <h5>Request are pending</h5>
           </div>
           <div id="bx6">
           <p>Total job listings <img src={four} alt="" /></p>
            <h2>0</h2>
            <h5>Total job listing</h5>
           </div>
           <div id="bx7">
           <p>Pending Approval <img src={six} alt="" /></p>
            <h2>5</h2>
            <h5>Approval are  pending</h5>
           </div>




            </div>
            </div>
        </div>
        </>
    )
}
export default Dashboard