import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ReviewForm.css"

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
        const day = new Date().toISOString().slice(0,10);
        fetch("/api/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({...review, pizzeriaId, day})
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
         <form onSubmit={(e) => handleSubmit(e)} className="form-review">
            <textarea className="form-review__textaera" value={review.review} required name="review" onChange={(e) => handleChange(e)}></textarea>
            <button className="form-review__button" type="submit">Send</button>
        </form>
    </div>

}

export default ReviewForm