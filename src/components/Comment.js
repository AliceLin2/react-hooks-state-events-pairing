import React, {useState} from "react"

function Comment({comments}){

    return (
        <div>
            <button id="comments">"Hide Comments"</button>
            <h2>2 Comments</h2>
            <h4>{comments[0].user}</h4>
            <h4>{comments[0].comment}</h4>
            <h4>{comments[1].user}</h4>
            <h4>{comments[1].comment}</h4>
        </div>
    )
}

export default Comment