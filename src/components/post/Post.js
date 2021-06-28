import './Post.css'

export default function Post({itemPost}) {

    return (
        <div className={'wrapPost'}>
            <div>{itemPost.title}</div>
            <div>{itemPost.body}</div>
        </div>
    );
}