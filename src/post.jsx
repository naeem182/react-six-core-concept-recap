//props name post
export default function Post({ post }) {
    // console.log(post)
    const { title, id, userId, body } = post
    // const{title,}
    return (
        <div className="stylepost">
            <h5>Title:{title}</h5>
            <p><small>userId:{userId}</small></p>
            <p><small>postId:{id}</small></p>
            <p>{body}</p>
        </div>
    )
}