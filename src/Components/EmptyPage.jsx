
import "./404.css"

function Empty(){
    return(
       <>
       <div className="empty">
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={()=> (history.back())}>Home</button>
       </div>
       </>
    )

}

export default Empty