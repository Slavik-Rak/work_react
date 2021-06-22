export default function Coment(props) {
    let {item} = props;
    return (
        <div>

            <h2>{item.name}</h2>
            <a href={'#'}>{item.email}</a>
            <div>{item.body}</div>

        </div>
    );
}