import { useEffect } from "react"
import Search from "./Search"
const HomePage = ()=>{

    useEffect(()=>{
        const apiKey = "4d05546a9ae849c28d065cd9bb27ec66"
        const url = `https://api.spoonacular.com/food/menuItems/search?query=burger&number=50&apiKey=${apiKey}`
        async function getData(){
            const response = await fetch(url);
            const data = await response.json()
            console.log(data)
        }
        getData()
    },[])

    return(
        <div>
            <Search />
        </div>
    )
}
export default HomePage