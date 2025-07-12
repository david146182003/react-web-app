import { Link } from "react-router-dom"

function Restaurant(){
    return(
        <div>
            <h1>Restaurant</h1>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
}

export default Restaurant