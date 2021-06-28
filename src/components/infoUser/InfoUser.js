import Adress from "../adress/Adress";
import Company from "../company/Company";

export default function InfoUser({infoUs}) {

    return (
        <div className={'wrapInfo'}>

            <div>{infoUs.name}</div>


            <div>{infoUs.email}</div>

            <div>{infoUs.phone}</div>

            <div>{infoUs.website}</div>

            <div>{infoUs.email}</div>

            <Adress adresArr={infoUs.address}/>

            <Company companiInfo={infoUs.company}/>

        </div>
    );
}