import React, {useState} from "react"

function Comment({comments}){
    const [isHide, setIsHide] = useState(false)

    const commentList = comments.map((comment)=>{
        return <div>
                    <h4>{comment.user}</h4>
                    <h4>{comment.comment}</h4>
                </div>
    })

    function handleClick(){
        setIsHide(!isHide)
    }

    return (
        <div id="comments-section">
            <button id="comments-button" onClick={handleClick}>{isHide?"Show Comments":"Hide Comments"}</button>
            {isHide?"":<div id="comments">
                            <h2>{comments.length} Comments</h2>
                            {commentList}
                        </div>
                        }
        </div>
    )
}

export default Comment