import './Geo.css'
export default function Geo({koordinats}) {

    return (
        <div className={'wrapGeo'}>
            <h3>Geo:</h3>
        <ul>
            <li>lat: {koordinats.lat}</li>
            <li>lng: {koordinats.lng}</li>
        </ul>

        </div>
    );
}