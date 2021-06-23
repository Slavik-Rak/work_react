import './Company.css'


export default function Company({company}) {
    return (
        <div className={'wrapCompany'}>

            <h3>Company :</h3>
            <ul>
                <li>name: {company.name}</li>
                <li>catchPhrase: {company.catchPhrase}</li>
                <li>bs: {company.name}</li>
            </ul>

        </div>
    );
}