import './Coment.css'
export default function Coment({item}) {

    return (
        <div className={'wrapComent'}>
            <h2 className={'h2Coment'}>{item.postId}</h2>
            <h1 className={'titleComent'}>{item.name}</h1>
            <div className={'descriptionId'}>{item.body}</div>
            <div className={'emailComent'}>email: {item.email}</div>
        </div>
    );
}