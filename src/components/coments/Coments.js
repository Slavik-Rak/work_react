

import Coment from "../coment/Coment";

export default function Coments({items,fn}) {

    return (
        <div>

            {
                items.map(coment=><Coment key={coment.id} item={coment} fn={fn} />)
            }

        </div>
    );

}