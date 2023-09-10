import React, { useState } from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom"
import ReviewForm from "./ReviewForm.jsx";
import "./DetailPizzeria.css"


export const DetailPizzeria = () => {
    const {pizzeria_id} = useParams()
    const [pizzeria, setPizzeria] = useState(null)
    const [reviews, setReviews] = useState([{
        pizzeria_id: 1,
        review: "hello",
        day:"2222-03-24"
    },
    {
        pizzeria_id: 1,
        review: "hello",
        day:"2222-03-24"
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

    const getDate = review =>{
        const date = new Date(review.day)
        return date.toISOString().slice(0,10);
    }

    const deletePill = review =>{
        fetch(`/api/reviews/${review}`, {
            method: "DELETE"
          }).then( () => {
            getReviews()
          })
    }
   
    if(!pizzeria){
        return <div>loading</div>
    }
    return <div className="detail-pizzeria-container">


        {isLoading && <p>Cargando...</p>}

        {!isLoading && (
        <div >
            
            <div className="detail-pizzeria-container-image">
                <img className="detail-pizzeria-image" src={pizzeria.photo_url}></img>
            </div>

            <div className="detail-pizzeria-info">
                <h2 className="detail-pizzeria-h2">{pizzeria.name}</h2>
                <p className="detail-pizzeria-p">{pizzeria.address}</p>
                <p>{pizzeria.tlf}</p>
            </div>

            <div>
                <h3 className="detail-pizzeria-h3">Reviews</h3>
                <ul>
                    {reviews.map( review =>(
                        <li key={review.id}>
                            <div className="detail-pizzeria-review">
                                <p className="detail-pizzeria-review-day">{getDate(review)}</p>
                                <p className="detail-pizzeria-review-p">{review.review}</p>
                                <button className="detail-pizzeria-review-button" onClick={() => deletePill(review.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>)}
        

        <h4 className="detail-pizzeria-h4">Add your review</h4>

       <ReviewForm pizzeriaId={pizzeria_id} onSuccess={getReviews}/>
    </div>
}

export default DetailPizzeria