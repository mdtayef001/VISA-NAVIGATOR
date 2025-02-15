import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyVisaInfo from "../components/MyVisaInfo";
import Swal from "sweetalert2";
import MobileCard from "../components/MobileCard";

const MyVisa = () => {
  const userData = useLoaderData();
  const [userVisa, setUserVisa] = useState(userData);
  const [search, setSearch] = useState(null);

  if (!userVisa) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleSearch = () => {
    const searchData = userData.filter((us) => us.countryName === search);
    setUserVisa(searchData);
  };

  const handleDelete = (_id) => {
    console.log(_id);

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

              const remainingVisa = userData.filter((vis) => vis._id !== _id);
              setUserVisa(remainingVisa);
            }
          });
      }
    });
  };

  const allData = {
    handleDelete,
  };

  return (
    <section className="container mx-auto mt-10 mb-20">
      <div>
        <div className="p-3 lg:p-6 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:mb-5 lg:gap-5">
            <label className="input input-bordered bg-white flex items-center gap-2">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                className="grow "
                placeholder="Search Country"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <button
              onClick={handleSearch}
              className="btn bg-blue-500 text-white"
            >
              Search Country
            </button>
          </div>
          <h1 className="text-2xl font-bold mb-10 text-center">
            Top 10 Easiest Countries to Visit with a Tourist Visa
          </h1>

          {/* Table for Desktop */}
          <div className="hidden md:block">
            <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Country</th>
                  <th className="px-4 py-2 text-left">country Image</th>
                  <th className="px-4 py-2 text-left">Visa Type</th>
                  <th className="px-4 py-2 text-left">Processing time</th>
                  <th className="px-4 py-2 text-left">Cost</th>
                  <th className="px-4 py-2 text-left">Validity</th>
                  <th className="px-4 py-2 text-left">Application method</th>
                  <th className="px-4 py-2 text-left">control</th>
                </tr>
              </thead>
              {userVisa.length === 0 ? (
                <p className="text-center m-5">No visa added</p>
              ) : (
                <tbody>
                  {userVisa.map((visa, index) => (
                    <tr key={index} className="bg-gray-100">
                      <MyVisaInfo allData={allData} visa={visa} />
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>

          {/* Cards for Mobile */}
          <div className="block md:hidden">
            {userVisa.map((visa) => (
              <MobileCard key={visa._id} visa={visa} allData={allData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyVisa;
