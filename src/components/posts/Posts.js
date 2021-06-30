import Post from "../post/Post";

export default function Posts({items,fnPaostId}) {

    return (
        <div>
            {
                items.map(value => <Post key={value.id} item={value} fnPaostId={fnPaostId}/>)
            }
        </div>
    );

}