import React, { useState } from "react"

export const ReviewForm = () =>{
    const [review, setReview] = useState({
        pizzeria_id: 0,
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
        fetch("api/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({...reviews, date})
        }).then(res => res.json())
        .then(pillId => {
         
            navigate(`/new-pill-created/${pillId.lastId}`)})
        .catch(error => {
            setError(error)
        })
    }


    return<div>
         <form onSubmit={(e) = handleSubmit(e)}>
            <textarea value = {review.review} onChange={(e) => handleChange(e)}></textarea>
            <button type="submit">Enviar</button>
        </form>
    </div>

}

export default ReviewForm