import Geo from "../geo/Geo";
import './Adress.css'
export default function Adress({adres}) {

    return (
        <div className={'wrapAdress'}>

            <h3>Adress:</h3>
            <ul>
                <li>street: {adres.street}</li>
                <li>suite: {adres.suite}</li>
                <li>city: {adres.city}</li>
                <li>zipcode: {adres.zipcode}</li>
                <li><Geo koordinats={adres.geo}/></li>
            </ul>


        </div>
    );
}