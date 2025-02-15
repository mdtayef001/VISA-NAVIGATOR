import { RxCross1 } from "react-icons/rx";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const UpdateModal = ({ info }) => {
  const { modalOpen, visa, setModalOpen } = info;

  const {
    _id,
    countryImage,
    countryName,
    vistaType,
    processingTime,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visa;

  const handleUpdateFrom = (e) => {
    e.preventDefault();
    const formData = e.target;
    const countryImage = formData.countryImage.value;
    const countryName = formData.countryName.value;
    const vistaType = formData.vistaType.value;
    const processingTime = formData.processingTime.value;
    const description = formData.description.value;
    const ageRestriction = formData.ageRestriction.value;
    const fee = formData.fee.value;
    const validity = formData.validity.value;
    const applicationMethod = formData.applicationMethod.value;

    const updateInfo = {
      countryImage,
      countryName,
      vistaType,
      processingTime,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
    };

    fetch(`https://b10-a10-server-side-mdtayef001.vercel.app/id/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire({
            title: "Success!",
            text: "updated ",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
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
              onSubmit={handleUpdateFrom}
              className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2"
            >
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
                    name="countryName"
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
                    name="countryImage"
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
                    name="description"
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
                    name="ageRestriction"
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
                    name="validity"
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
                    name="applicationMethod"
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
                    name="vistaType"
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
                    name="processingTime"
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
                  name="fee"
                  className="input input-bordered bg-white text-black w-full max-w-xs"
                />
              </label>
              <button className="btn lg:col-span-3  col-span-2  bg-blue-500 text-white hover:bg-blue-600 border-none">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

UpdateModal.propTypes = {
  info: PropTypes.object,
};

export default UpdateModal;
