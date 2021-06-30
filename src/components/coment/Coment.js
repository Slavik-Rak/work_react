export default function Coment({item}) {

    return (
        <div>
            Coment
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