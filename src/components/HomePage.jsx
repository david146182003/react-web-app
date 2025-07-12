import { useEffect, useState } from "react"
import Search from "./Search"
import { Link } from "react-router-dom"
const HomePage = () => {

    const [dataS, setData] = useState([])
    
    useEffect(() => {
        const apiKey = "4d05546a9ae849c28d065cd9bb27ec66"
        const url = `https://api.spoonacular.com/food/menuItems/search?query=burger&number=50&apiKey=${apiKey}`
        async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        const newData = []
        for (let i = 0; i < data.number; i++) {
            let img = data.menuItems[i].image;
            let id = data.menuItems[i].id;
            let restaurant = data.menuItems[i].restaurantChain;
            let title = data.menuItems[i].title;
            let dataObj ={
                id: id,
                restaurant: restaurant,
                title: title,
                img: img
            }
            newData.push(dataObj)
        }
        setData(newData)

        console.log(dataS)

    }
        getData()
    }, [])


    return (
        <div>
            <h1>Welcome to Burger station </h1>
            
            <Search data={dataS}/>
            <ul>
                {dataS.map(title =>
                    <Link to='/restaurant'><li className="item" key={title.id}>{title.title}</li></Link>
                )}
            </ul>
        </div>
    )
}
export default HomePage