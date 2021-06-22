import './Coment.css'
export default function Coment(props) {
    let {item} = props;
    return (
        <div className={'wrapComent'}>

            <h2 className={'titleComent'}>{item.name}</h2>
            <div className={'emaiComent'} href={'#'}>{item.email}</div>
            <div className={'descriptionComent'}>{item.body}</div>

        </div>
    );
}