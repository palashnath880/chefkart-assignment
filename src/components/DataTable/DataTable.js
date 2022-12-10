import React, { useEffect, useState } from 'react';

const DataTable = () => {

    const [users, setUsers] = useState(null);

    const ascending = () => {
        const ascendingUser = users.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
        setUsers([...ascendingUser]);
    }

    const descending = () => {
        const descendingUser = users.sort((a, b) => (a.first_name < b.first_name ? 1 : -1));
        setUsers([...descendingUser]);
    }

    const resetFilter = () => {
        const descendingUser = users.sort((a, b) => (a.id > b.id ? 1 : -1));
        setUsers([...descendingUser]);
    }

    useEffect(() => {
        const fetcher = async () => {
            const res = await fetch('./data.json');
            const data = await res.json();
            setUsers(data);
        }
        fetcher();
    }, []);

    return (
        <div>
            <div className="flex flex-col h-screen">
                <div className="flex-grow overflow-x-auto">
                    <table className="relative w-full border">
                        <thead className='z-50'>
                            <tr>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100 z-50">ID</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100 min-w-max">
                                    <div className="dropdown dropdown-bottom">
                                        <label tabIndex={0} className="cursor-pointer">First Name</label>
                                        <ul tabIndex={0} className="dropdown-content z-50 shadow mt-6 font-normal menu p-2 shadow bg-base-100 rounded-box min-w-max">
                                            <li><a onClick={resetFilter}>Unsort</a></li>
                                            <li><a onClick={ascending}>Sort By ASC</a></li>
                                            <li><a onClick={descending}>Sort By DESC</a></li>
                                        </ul>
                                    </div>
                                </th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Last Name</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Email</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Gender</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">IP Address</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Airport Code</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Time</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Status</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Mobile</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Area</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Show</th>
                                <th className="sticky top-0 px-1 py-3 bg-slate-100">Edit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {users !== null && users.map((user, index) =>
                                <tr key={index}>
                                    <td className="px-1 py-2 text-center sticky left-0 bg-slate-100 xl:bg-transparent">
                                        {user.id}
                                    </td>
                                    <td className="px-1 py-2 text-center">{user.first_name}</td>
                                    <td className="px-1 py-2 text-center">{user.last_name}</td>
                                    <td className="px-1 py-2 text-center">{user.email}</td>
                                    <td className="px-1 py-2 text-center">{user.gender}</td>
                                    <td className="px-1 py-2 text-center">{user.ip_address}</td>
                                    <td className="px-1 py-2 text-center">{user.airport_code}</td>
                                    <td className="px-1 py-2 text-center">{user.time}</td>
                                    <td className="px-1 py-2 text-center">
                                        {user.status ? <span className="badge badge-success badge-lg">True</span> :
                                            <span className="badge badge-error badge-lg">False</span>}
                                    </td>
                                    <td className="px-1 py-2 text-center">{user.mobile}</td>
                                    <td className="px-1 py-2 text-center">{user.area}</td>
                                    <td className="px-1 py-2 text-center">
                                        {user.show ? <span className="badge badge-success badge-lg">True</span> :
                                            <span className="badge badge-error badge-lg">False</span>}
                                    </td>
                                    <td className="px-1 py-2 text-center">
                                        {user.edit ? <span className="badge badge-success badge-lg">True</span> :
                                            <span className="badge badge-error badge-lg">False</span>}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DataTable;
