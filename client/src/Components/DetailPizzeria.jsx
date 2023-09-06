import React, { useState } from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom"
import ReviewForm from "./ReviewForm.jsx";


export const DetailPizzeria = () => {
    const {pizzeria_id} = useParams()
    const [pizzeria, setPizzeria] = useState(null)
    const [reviews, setReviews] = useState([{
        pizzeria_id: 1,
        review: "Hello, loved it",
        date:"22-02-2020"
    },
    {
        pizzeria_id: 1,
        review: "Hello, loved it",
        date:"22-02-2020"
    }])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() =>{
        getPizzeria()
        getReviews()
    },[pizzeria_id])

    const getPizzeria = () =>{
        setIsLoading(true)
        fetch(`/api/pizzerias/${pizzeria_id}`)
        .then((response) => response.json())
        .then((pizzeria) => 
        setPizzeria(pizzeria))
        .catch(error => {
            setError(error)
        })
        setIsLoading(false)
    }

    const getReviews = () =>{
        setIsLoading(true)
        fetch(`/api/pizzerias/${pizzeria_id}/reviews`)
        .then((response) => response.json())
        .then((reviews) =>{
            setReviews(reviews)
        })
        .catch(error => {
            setError(error)
        })
        setIsLoading(false)
    }
   
    if(!pizzeria){
        return <div>loading</div>
    }
    return <div>


        {isLoading && <p>Cargando...</p>}

        {!isLoading && (
        <div>
        
        <h2>{pizzeria.name}</h2>
        <h3>Dirección</h3>
        <p>{pizzeria.address}</p>

        <ul>
            {reviews.map( review =>(
                <li key={review.id}>
                    <div><p>{review.review}</p></div>
                </li>
            ))}
        </ul>
        </div>)}
        

        

       <ReviewForm pizzeriaId={pizzeria_id} onSuccess={getReviews}/>
    </div>
}

export default DetailPizzeria