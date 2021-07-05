export default function UserDetails({location:{state}}) {
    console.log(state);
    return (
        <div>
            {
               JSON.stringify(state)
            }

        </div>
    );
}