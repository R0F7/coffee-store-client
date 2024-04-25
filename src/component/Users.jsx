import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {
        // make sure user is confirmed to delete(use like sweet alert)

        fetch(`https://coffee-store-server-jet-one.vercel.app/user/${id}`, {
            method: 'DELETE',

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('deleted');
                if (data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div>
            <h4>users:{loadedUsers.length}</h4>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>LastLogged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.email}</td>
                                <td>{user?.createdAt || 'Not Found'}</td>
                                <td>{user?.lastLoggedAt || 'Not Found'}</td>
                                <td
                                    onClick={() => handleDelete(user._id)}
                                    className="bg-gray-100 inline-block rounded my-2 text-red-500 font-black cursor-pointer"
                                >X</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;