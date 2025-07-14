import React, { useEffect, useState, createContext} from "react"
import Search from "./Search"
import { data, Link } from "react-router-dom"
import Restaurant from "./Restaurant"
import InfoPage from "./InfoPage"



const HomePage = () => {

    const [dataS, setData] = useState([])
    console.log(dataS)

    
    const APIKEY = "4d05546a9ae849c28d065cd9bb27ec66"
    const url = `https://api.spoonacular.com/food/menuItems/search?query=burger&number=50&apiKey=${APIKEY}`
    const newData = []
    async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            
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
    }
    
    useEffect(() => {
        getData()
    }, [])

    
    return (
        <div>
            <h1>Welcome to Burger station </h1>
            
                <Search data={dataS}/>
                <Restaurant data={dataS} />
          
        </div>
    )
}
export default HomePage