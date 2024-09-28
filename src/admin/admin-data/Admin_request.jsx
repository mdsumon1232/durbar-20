import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Admin_request = () => {
  const pending_admin_data = useLoaderData();
  const [admins, setAdmins] = useState(pending_admin_data.data);

  // admin request accept

  const acceptAdmin = (id) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        console.log(xhr.response);
      }
    };
    xhr.open(
      "POST",
      "http://localhost/durbar-20-client/admin_accept.php",
      true
    );
    xhr.send(JSON.stringify(id));
  };

  // admin request delete

  const deleteAdmin = (id) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.response);
        if (response.success) {
          setAdmins(
            admins.filter((updateAdmin) => updateAdmin.admin_id !== id)
          );
        } else {
          alert(response.message);
        }
      }
    };
    xhr.open(
      "POST",
      "http://localhost/durbar-20-client/adminRequestDelete.php",
      true
    );
    xhr.send(JSON.stringify(id));
  };

  return (
    <div className="w-full ">
      <h2 className="text-center py-2 text-[25px] ">Pending Admin List</h2>

      <div className="mt-5">
        <table className=" w-1/2 mx-auto">
          <thead>
            <tr className="bg-purple-300 py-1 ">
              <th className="py-1">Name</th>
              <th className="py-1">Email</th>
              <th className="py-1">Mobile</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin) => {
              return (
                <tr
                  key={admin.admin_id}
                  className="odd:bg-purple-50 even:bg-purple-100"
                >
                  <td className="py-2 px-3">{admin.full_name}</td>
                  <td className="py-2 px-3">{admin.admin_email}</td>
                  <td className="py-2 px-3">{admin.admin_mobile}</td>
                  <td className="py-2 px-3">
                    <button
                      onClick={() => acceptAdmin(admin.admin_id)}
                      className="bg-green-500 py-1 px-2 text-white rounded-sm"
                    >
                      Accept
                    </button>
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => deleteAdmin(admin.admin_id)}
                      className="bg-red-500 py-1 px-2 text-white rounded-sm"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin_request;
