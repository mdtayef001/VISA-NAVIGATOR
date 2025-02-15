import { MdOutlineDeleteForever } from "react-icons/md";
import MobileModal from "./MobileModal";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

const MobileCard = ({ visa, allData }) => {
  console.log(visa);
  const [modalOpen, setModalOpen] = useState(false);
  const { handleDelete } = allData;

  const handlMobileDelete = () => {
    setModalOpen(true);
  };

  return (
    <div className="border border-gray-200 rounded-lg text-center shadow-md mb-4 p-4 bg-white space-y-2 lg:space-y-0">
      <h2 className="text-lg font-bold text-blue-500">{visa.countryName}</h2>
      <p>
        <img className="w-10 mx-auto" src={visa.countryImage} alt="" />
      </p>
      <p>
        <span className="font-semibold">vistaType:</span> {visa.vistaType}
      </p>
      <p>
        <span className="font-semibold">processingTime:</span>{" "}
        {visa.processingTime}
      </p>
      <p>
        <span className="font-semibold">fee:</span> {visa.fee}
      </p>
      <p>
        <span className="font-semibold">validity:</span> {visa.validity}
      </p>
      <p>
        <span className="font-semibold">applicationMethod:</span>{" "}
        {visa.applicationMethod}
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => handlMobileDelete()}
          className="text-lg hover:bg-blue-500 hover:text-white py-1 px-2 rounded-md"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => handleDelete(visa._id)}
          className="text-xl hover:bg-red-500 hover:text-white py-1 px-2 rounded-md"
        >
          <MdOutlineDeleteForever />
        </button>
      </div>
      <MobileModal
        visa={visa}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
};

MobileCard.propTypes = {
  visa: PropTypes.object,
  allData: PropTypes.object,
};

export default MobileCard;
