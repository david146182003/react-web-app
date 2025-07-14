import { Link } from "react-router-dom"
import InfoPage from "./InfoPage"


function Restaurant({data}){
    
   
    return(
        <div>
        
            <h2>Hambergers</h2>
            <ul>
                
                {data.map(title =>
                    <Link to={`/info/${title.id}`}><li key={title.id} className="item">{title.title}</li></Link>
                )}
            </ul>
            
            
        </div>
    )
}

export default Restaurant