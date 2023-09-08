import { useEffect, useState } from "react"

// component 
export default function Posts() {
    //store load
    const [post, setpost] = useState
    //useeffect
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    //jsx
    return (
        // css class use karar jonno classname deya lage
        <div className="stylepost">
            <h3> post:</h3>
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