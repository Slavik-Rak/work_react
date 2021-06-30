import './Post.css'

export default function Post({item,fnPaostId}) {
    return (
        <div>
            {item.title}<br/>{item.body}
            <br/>
            <button onClick={
                ()=>fnPaostId(item.id)

            }>Coments Post</button>
            <hr/>
        </div>
    );
}