import './Post.css'
export default function Post({post}) {

    return (
        <div className={'wrapPost'}>

            <h2>{post.title}</h2>
            <div>{post.body}</div>

        </div>
    );
}