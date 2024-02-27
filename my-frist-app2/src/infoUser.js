import { useState } from "react";

export function ExternalUser () {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <h2>External Users</h2>
        </div>
    )
}