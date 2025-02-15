// icons
import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Modal = ({ info }) => {
  const { modalOpen, user, visaData, setModalOpen } = info;
  const navigate = useNavigate();

  const {
    countryImage,
    countryName,
    vistaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
    AppliedDate,
  } = visaData;

  const handleApply = (e) => {
    e.preventDefault();
    const lastName = e.target.lastName.value;
    const applyInfo = {
      countryImage,
      countryName,
      vistaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
      email: user.email,
      firstName: user.displayName,
      lastName,
      AppliedDate,
    };

    fetch("https://b10-a10-server-side-mdtayef001.vercel.app/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setModalOpen(close);
          Swal.fire({
            title: "Success",
            text: "Your visa has been added",
            icon: "success",
          });
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div
        className={`${
          modalOpen ? " visible" : " invisible"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
      >
        <div
          className={`${
            modalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
          } w-[90%] md:w-[70%] lg:w-[30%] bg-[#ffffff] rounded-lg p-4 transition-all duration-300`}
        >
          <div className="w-full flex items-end justify-end">
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>

          <div className="w-full  overflow-hidden">
            <form
              onSubmit={handleApply}
              className="grid lg:grid-cols-3 grid-cols-2 gap-2"
            >
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt text-black">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Type here"
                  defaultValue={user.email}
                  className="input input-bordered bg-white text-black w-full max-w-xs"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt text-black">First Name</span>
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  defaultValue={user.displayName}
                  className="input input-bordered bg-white text-black w-full max-w-xs"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt text-black">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  className="input input-bordered bg-white text-black w-full max-w-xs"
                  required
                />
              </label>
              {/* current  data */}
              {/* 1 */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text-alt text-black">
                      country Name
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    defaultValue={countryName}
                    className="input input-bordered bg-white text-black w-full max-w-xs"
                  />
                </label>
              </div>
              {/* 2 */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text-alt text-black">Image URL</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    defaultValue={countryImage}
                    className="input input-bordered bg-white text-black w-full max-w-xs"
                  />
                </label>
              </div>
              {/* 3 */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text-alt text-black">
                      description
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    defaultValue={description}
                    className="input input-bordered bg-white text-black w-full max-w-xs"
                  />
                </label>
              </div>
              {/* 1 */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text-alt text-black">Age</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    defaultValue={ageRestriction}
                    className="input input-bordered bg-white text-black w-full max-w-xs"
                  />
                </label>
              </div>

              {/* 1 */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text-alt text-black">Validity</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    defaultValue={validity}
                    className="input input-bordered bg-white text-black w-full max-w-xs"
                  />
                </label>
              </div>
              {/* 1 */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text-alt text-black">Method</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    defaultValue={applicationMethod}
                    className="input input-bordered bg-white text-black w-full max-w-xs"
                  />
                </label>
              </div>
              {/* 1 */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text-alt text-black">
                      vista Type
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    defaultValue={vistaType}
                    className="input input-bordered bg-white text-black w-full max-w-xs"
                  />
                </label>
              </div>
              {/* 1 */}
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text-alt text-black">
                      processingTime
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    defaultValue={processingTime}
                    className="input input-bordered bg-white text-black w-full max-w-xs"
                  />
                </label>
              </div>

              {/* current data */}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt text-black">Fee</span>
                </div>
                <input
                  type="text"
                  placeholder="Fee"
                  defaultValue={fee}
                  className="input input-bordered bg-white text-black w-full max-w-xs"
                />
              </label>
              <button className="btn lg:col-span-3  col-span-2  bg-blue-500 text-white hover:bg-blue-600 border-none">
                Apply for the visa
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  info: PropTypes.object,
};

export default Modal;
