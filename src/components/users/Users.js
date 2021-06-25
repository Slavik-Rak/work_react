import User from "../user/User";

export default function Users({items, appFn}) {


    return (
        <div>
            {
                items.map(user => <User key={user.id} appFn={() => appFn(user.id)} item={user}/>)
            }
        </div>
    );

}