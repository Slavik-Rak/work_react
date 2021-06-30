export default function User({item, fn}) {

    return (
        <div>
            {item.name} - {item.username}
            <button onClick={
                () => fn(item.id)
            }>My Post
            </button>
            <hr/>
        </div>
    );
}