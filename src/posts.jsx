import { useEffect, useState } from "react"
import Post from "./post"

// component 
export default function Posts() {
    //store load
    const [posts, setposts] = useState([])
    //useeffect
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setposts(data))
    }, [])
    //jsx
    return (
        // css class use karar jonno classname deya lage
        <div className="">
            <h3> post:{posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
    // 
}
// data load
/*
1.create a store to store a data
2.create use effect with no dependencies
3.use fetch load data


*/