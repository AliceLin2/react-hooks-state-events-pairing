import video from "../data/video.js";
import React, {useState} from "react"
import Vote from "./Vote"
import Comment from "./Comment"
import Overview from "./Overview"

function App() {
  console.log("Here's your data:", video);

  return (
    <div>
      <div className="App">
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </div>
      <Overview title={video.title}  views={video.views} createdAt={video.createdAt}/>
      <Vote downVote={video.downvotes} upVote={video.upvotes}/>
      <Comment comments={video.comments}/>
    </div>
  );
}

export default App;
