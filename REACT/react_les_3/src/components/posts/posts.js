import {useEffect, useState} from "react";
import "./posts.css"
import axiosInstance from "../../services/api";
import Post from "../post/post"

export default function Posts() {


   const [posts, setPosts] = useState([]);
   const  [details, setDetails] = useState(null);

   useEffect(() => {
       axiosInstance.get('/posts').then(value => {
           setPosts([...value.data]);
       });
   }, []);

   const find = x => setDetails(posts.find(value => value.id === x));


  return (
    <div>
        <div>
            {
                details && <h3>{details.id}:{details.title}</h3>
            }
        </div>
        <div className={'posts-wrapper'}>
            {
                posts.map(value => <Post key={value.id} item={value} findIdFunc={find}/>)
            }
        </div>
    </div>
  );
}