export default function User({item,fn}) {


    return (
        <div>
            {item.id} - {item.name} : <button onClick={
            ()=>fn(item.id)
        }>Info User</button>
        </div>
    );

}