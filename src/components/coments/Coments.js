import Coment from "../coment/Coment";

export default function Coments({items}) {

    return (
        <div>
            {
                items.map(value=><Coment item={value}/>)
            }
        </div>
    );

}