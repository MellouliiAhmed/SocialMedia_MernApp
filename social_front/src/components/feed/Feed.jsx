import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Feed({username}) {
  const [posts,setPosts] = useState([]);

  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get("/posts/profile/" + username)
          : await axios.get("posts/timeline/65b26b2c6b328b19bf84199e");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Handle the error here, for example:
        // setError(error.message);
      }
    };
  
    fetchPosts();
  }, []);


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) =>(
          <Post key={p._id} post={p} />
        ))}
        </div>
    </div>
  );
}