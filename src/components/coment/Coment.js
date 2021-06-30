export default function Coment({item}) {

    return (
        <div>
            <div>
                {item.name}
            </div>
            <div>
                {item.body}
            </div>
            <hr/>
        </div>
    );

}