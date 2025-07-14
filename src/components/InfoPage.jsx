import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Restaurant from "./Restaurant"
import { menuData, mockFetch } from "../mock/mockData"
function InfoPage() {

    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [dataS, setData] = useState([])
    const [info, setInfo] = useState([])


    const APIKEY = "4d05546a9ae849c28d065cd9bb27ec66"
    const url = `https://api.spoonacular.com/food/menuItems/search?query=burger&number=50&apiKey=${APIKEY}`



    async function getData() {
        setIsLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            // const data = await mockFetch();
            console.log("this is data:", data)
            const newData = []

            const menuArr = data?.menuItems;

            for (const menuItem of menuArr) {
                console.log('menu item:', menuItem)
                let id = menuItem.id;
                let img = menuItem.image;
                let restaurant = menuItem.restaurantChain;
                let title = menuItem.title;
                let dataObj = {
                    id: id,
                    restaurant: restaurant,
                    title: title,
                    img: img
                }
                newData.push(dataObj)
            }
            setData(newData)

            const newInfo = newData.filter(data => data.id == id)
            console.log("newData:", newData)
            console.log("newInfo:", newInfo)

            setInfo(newInfo)

        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log(dataS)
    console.log('info', info)

    return (
        <div className="infoItem">
            {isLoading && <h1>The data is loading...</h1>}
            <h1>{!isLoading && info[0]?.title}</h1>
            <h2>{!isLoading && info[0]?.restaurant}</h2>
            <img src={!isLoading && info[0]?.img} alt="" />

            <Link to="/"><button>Back</button></Link>
        </div>

    )
}
export default InfoPage