import Post from "../post/Post";

export default function Posts({itemsPost}) {

    return (
        <div>
            {
                itemsPost.map(value => <Post key={value.id} itemPost={value}/>)
            }

        </div>
    );
}