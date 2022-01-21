import video from "../data/video.js";
import React, {useState} from "react"
import Vote from "./Vote"
import Comment from "./Comment"
import Overview from "./Overview"

function App() {
  console.log("Here's your data:", video);
  const [downVote, setDownVote] = useState(video.downvotes)
  const [upVote, setUpVote] = useState(video.upvotes)

  function handleUpVote(){
    setUpVote((upVote)=>upVote+1)
  }

  function handleDownVote(){
    setDownVote((downVote)=>downVote+1)
  }

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
      <Vote downVote={downVote} upVote={upVote} onDownVoteClick={handleDownVote} onUpVoteClick={handleUpVote}/>
      <Comment comments={video.comments}/>
    </div>
  );
}

export default App;
