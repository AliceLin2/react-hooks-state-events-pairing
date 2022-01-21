import React, {useState} from "react"

function Vote({downVote, upVote}){
    return (
        <div>
            <button id={upVote}>{upVote} 👍</button>
            <button id={downVote}>{downVote} 👎</button>
        </div>
    )
}

export default Vote