



export default function Coment({item, fn}) {

    return (
        <div>
            <hr/><b>
            {item.name} </b>-
            <button onClick={
            ()=>fn(item.id)
            }>Click</button>

        </div>
    );

}