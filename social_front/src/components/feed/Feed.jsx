import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Feed() {
  const [posts,setPosts] = useState([]);

  
  useEffect(() =>{
      const res = axios.get("posts/timeline/65b26b2c6b328b19bf84199e");
      console.log(res)
  },[])

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const res = await axios.get("posts/timeline/65b26b2c6b328b19bf84199e");
  //       console.log(res.data); // Assuming the data you need is in res.data
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };
  //   fetchPosts();
  // }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p) =>(
          <Post key={p.id} post={p} />
        ))}
        </div>
    </div>
  );
}