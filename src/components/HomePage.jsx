import { useEffect, useState } from "react"
import Search from "./Search"
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
            {dataS.id}
            <Search />
            <ul>
                {dataS.map(title =>
                    <li key={title.id}>{title.title}</li>
                )}
            </ul>
        </div>
    )
}
export default HomePage