import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Restaurant from "./Restaurant"
function InfoPage() {

    const { id } = useParams()


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
            let dataObj = {
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



    const info = dataS.filter(data => data.id == id)
    console.log(dataS)
    console.log(info)



    return (
        <div className="infoItem">
            {info[0].title}
            {info[0].restaurant}
            <img src={info[0].img} alt="" />

            <Link to="/"><button>Back</button></Link>
        </div>

    )
}
export default InfoPage