import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const VisaApplications = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b10-a10-server-side-mdtayef001.vercel.app/id/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remainingVisa = users.filter((vis) => vis._id !== _id);
              setUsers(remainingVisa);
            }
          });
      }
    });
  };

  return (
    <section className="container mx-auto mt-10 mb-20">
      <div className="grid md:gap-6 gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {users.map((user) => (
          <div key={user._id} className="card card-compact bg-white shadow-xl">
            <figure>
              <img src={user.countryImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Country: {user.countryName}</h2>
              <p>Visa_type: {user.vistaType}</p>
              <p>Processing_time:{user.processingTime} </p>
              <p>Fee: {user.fee}</p>
              <p>Application_method: {user.applicationMethod}</p>
              <p>Applied_date: {user.AppliedDate}</p>
              <p>
                Applicant&apos;s name: {user.firstName + " " + user.lastName}
              </p>
              <p>Applicant’s email: {user.email}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600 lg:col-span-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaApplications;
