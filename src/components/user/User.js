import {Link} from "react-router-dom";

export default function User({item, item: {name, username, id}}) {

    return (
        <div>

            {name} - {username} {
            <Link to={
                {
                    pathname : '/users/' + id,
                    state : item
                }
            }>
                <button>Info singl User</button>
            </Link>
        }
        </div>
    );
}