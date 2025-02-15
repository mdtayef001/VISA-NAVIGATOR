import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddVisa = () => {
  const { user } = useContext(AuthContext);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = e.target;

    const countryImage = fromData.countryUrl.value;
    const vistaType = fromData.vistaType.value;
    const countryName = fromData.countryName.value;
    const time = fromData.time.value;
    const description = fromData.description.value;
    const age = fromData.age.value;
    const fee = fromData.fee.value;
    const validity = fromData.validity.value;
    const applicationMethod = fromData.applicationMethod.value;
    const VisaData = {
      countryImage,
      countryName,
      vistaType,
      processingTime: time,
      requiredDocuments: [selectedOptions],
      description,
      ageRestriction: age,
      fee,
      validity,
      applicationMethod,
      AppliedDate: user.metadata.lastSignInTime,
    };

    fetch("https://b10-a10-server-side-mdtayef001.vercel.app/visas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(VisaData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Your visa has been added",
            icon: "success",
          });
          fromData.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  return (
    <section className="container mx-auto my-20 dark:text-white text-black p-3">
      <h1 className="text-center font-bold text-xl mb-5 text-black">
        Add Visa
      </h1>
      <div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="grid md:grid-cols-2 grid-cols-1 lg:gap-6 gap-3"
        >
          {/* 1 */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-black">Country image</span>
            </div>
            <input
              type="text"
              placeholder="image URL"
              name="countryUrl"
              required
              className="input input-bordered w-full bg-white text-black"
            />
          </label>
          {/* 2 */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-black">Country name</span>
            </div>
            <input
              type="text"
              placeholder="Country name"
              required
              name="countryName"
              className="input input-bordered w-full bg-white text-black"
            />
          </label>
          {/* 3 */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-black">Visa-type</span>
            </div>
            <select
              className="input input-bordered w-full bg-white text-black"
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
          </label>
          {/* 4 */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-black">Processing time</span>
            </div>
            <input
              type="text"
              placeholder="Processing time"
              name="time"
              required
              className="input input-bordered w-full bg-white text-black"
            />
            <div className="label"></div>
          </label>
          {/* 4 */}
          <label className="form-control w-full">
            <div className="label-text text-black">Required Documents</div>
            <div>
              <div className="form-control ">
                <label className="cursor-pointer label">
                  <span className="label-text text-black">Valid passport</span>
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    required
                    value="Valid_Passport"
                    className="checkbox checkbox-info"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="cursor-pointer label">
                  <span className="label-text text-black">
                    Visa application form
                  </span>
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    required
                    value="Visa_application_form"
                    className="checkbox checkbox-info"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="cursor-pointer label">
                  <span className="label-text text-black">
                    Recent passport-sized photograph
                  </span>
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    required
                    value="passport_sized_photograph"
                    className="checkbox checkbox-info"
                  />
                </label>
              </div>
            </div>
          </label>
          <div className="mb-4">
            <label className="label-text text-black">Description</label>
            <textarea
              name="description"
              required
              placeholder="Enter description"
              className="input input-bordered w-full bg-white text-black px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              Age Restriction
            </label>
            <input
              type="number"
              required
              name="age"
              placeholder="Enter age restriction"
              className="input input-bordered w-full bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              Fee
            </label>
            <input
              type="number"
              required
              name="fee"
              placeholder="Enter visa fee"
              className="input input-bordered w-full bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              Validity
            </label>
            <input
              type="text"
              required
              name="validity"
              placeholder="Enter validity period"
              className="input input-bordered w-full bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              Application Method
            </label>
            <input
              type="text"
              required
              name="applicationMethod"
              placeholder="Enter application method"
              className="input input-bordered w-full bg-white text-black"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 lg:col-span-2">
            Add Visa
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddVisa;
