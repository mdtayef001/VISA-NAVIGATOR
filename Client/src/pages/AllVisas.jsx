import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllVisas = () => {
  const allVisaData = useLoaderData();
  const [visas, setVisas] = useState(allVisaData);

  if (!visas) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleVisaType = (e) => {
    if (e.target.value === "Tourist visa") {
      const selectedVisa = allVisaData.filter(
        (visa) => visa.vistaType === "Tourist visa"
      );
      setVisas(selectedVisa);
    } else if (e.target.value === "Student visa") {
      const selectedVisa = allVisaData.filter(
        (visa) => visa.vistaType === "Student visa"
      );

      setVisas(selectedVisa);
    } else if (e.target.value === "Official visa") {
      const selectedVisa = allVisaData.filter(
        (visa) => visa.vistaType === "Official visa"
      );
      setVisas(selectedVisa);
    } else {
      setVisas(allVisaData);
    }
  };

  return (
    <section className="container mx-auto my-20 p-3">
      <div className="flex justify-center items-center gap-20 font-bold text-2xl mb-10">
        <span>All Visas</span>
        <select
          onClick={(e) => handleVisaType(e)}
          className="input input-bordered  bg-white text-black"
          defaultValue={"DEFAULT"}
          name="vistaType"
        >
          <option value="DEFAULT" selected>
            Select you visa type
          </option>
          <option value="Tourist visa">Tourist visa</option>
          <option value="Student visa">Student visa</option>
          <option value="Official visa">Official visa</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
        {visas.map((visa) => (
          <div key={visa._id} className="card card-compact  ;lg:w-96 shadow-xl">
            <figure className="md:h-40">
              <img
                className="object-contain"
                src={visa.countryImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{visa.countryName}</h2>
              <p>Processing Time: {visa.processingTime}</p>
              <p>Age Restriction: {visa.ageRestriction}</p>
              <Link
                className="btn border-none bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                to={`/visas/${visa._id}`}
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllVisas;
