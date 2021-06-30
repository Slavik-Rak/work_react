export default function Post({item}) {

    return (
        <div>
            {item.title}<br/>{item.body}
            <hr/>
        </div>
    );

}