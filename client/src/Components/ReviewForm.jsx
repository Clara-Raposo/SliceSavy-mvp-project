import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ReviewForm = ({pizzeriaId, onSuccess}) =>{
    const navigate = useNavigate()
    const [review, setReview] = useState({
        review:""
    })

 

    const handleChange = event =>{
        const name = event.target.name
        const value = event.target.value

        setReview( (review) =>({...review,[name]:[value]}))
    }

    const handleSubmit = event => {
        event.preventDefault()
        addReview(review)
    }

    const addReview = review =>{
        const date = new Date().toISOString().slice(0,10);
        fetch("/api/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({...review, pizzeriaId, date})
        }).then(res => res.json())
        .then( () => {
            //navigate(`/pizzeria/${pizzeriaId}`)
            //window.location.reload()
            onSuccess()
        }

        )

        .catch(error => {
            setError(error)
        })
    }


    return<div>
         <form onSubmit={(e) => handleSubmit(e)}>
            <textarea value={review.review} name="review" onChange={(e) => handleChange(e)}></textarea>
            <button type="submit">Enviar</button>
        </form>
    </div>

}

export default ReviewForm