import React from "react"

function Vote({downVote, upVote, onUpVoteClick, onDownVoteClick}){
    return (
        <div>
            <button id="upVote" onClick={onUpVoteClick}>{upVote} 👍</button>
            <button id="downVote" onClick={onDownVoteClick}>{downVote} 👎</button>
        </div>
    )
}

export default Vote