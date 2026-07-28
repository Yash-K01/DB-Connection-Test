import { useEffect, useState } from "react";
import API from "../services/api";

function ViewUsers() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {

        try {

            const response = await API.get("/users");

            setUsers(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to fetch users.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (

        <div
            style={{
                width: "800px",
                margin: "40px auto",
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)"
            }}
        >

            <h2 style={{ marginBottom: "20px" }}>
                Registered Users
            </h2>

            <button
                onClick={fetchUsers}
                style={{
                    marginBottom: "20px",
                    padding: "10px 20px",
                    background: "#198754",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Refresh
            </button>

            {
                loading ?

                    <h3>Loading...</h3>

                    :

                    <table
                        width="100%"
                        border="1"
                        cellPadding="10"
                        style={{
                            borderCollapse: "collapse"
                        }}
                    >

                        <thead
                            style={{
                                background: "#0d6efd",
                                color: "white"
                            }}
                        >

                            <tr>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                users.length === 0 ?

                                    (
                                        <tr>

                                            <td
                                                colSpan="3"
                                                align="center"
                                            >
                                                No Users Found
                                            </td>

                                        </tr>
                                    )

                                    :

                                    users.map((user) => (

                                        <tr key={user._id}>

                                            <td>{user.name}</td>

                                            <td>{user.email}</td>

                                            <td>{user.phone}</td>

                                        </tr>

                                    ))

                            }

                        </tbody>

                    </table>

            }

        </div>

    );

}

export default ViewUsers;