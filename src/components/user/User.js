import Adress from "../adress/Adress";
import Company from "../company/Company";
import './User.css'
import Posts from "../posts/Posts";
export default function User({item}) {

    return (
        <div className={'wrapUser'}>

            <h2>{item.name} - {item.username}</h2>
            <div>email: {item.email}</div>
            <Adress adres={item.address}/>
            <div>phone: {item.phone}</div>
            <div>website: {item.website}</div>
            <Company company={item.company}/>
            <Posts idUs={item.id}/>



        </div>
    );
}