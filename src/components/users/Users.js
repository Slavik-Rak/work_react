import User from "../user/User";

export default function Users({items,fn}) {

    return (
        <div>
            {
                items.map(value => <User key={value.id} item={value} fn={fn}/>)
            }
        </div>
    );

}