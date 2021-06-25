export default function User({item,appFn}) {




    return (
        <div>

            {item.id} - {item.name} - <button onClick={
            appFn
        }>Click</button>

        </div>
    );

}