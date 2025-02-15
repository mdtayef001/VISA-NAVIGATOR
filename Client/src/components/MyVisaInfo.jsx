import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import UpdateModal from "./UpdateModal";

import PropTypes from "prop-types";
import { useState } from "react";

const MyVisaInfo = ({ allData, visa }) => {
  const { handleDelete } = allData;
  const [modalOpen, setModalOpen] = useState(false);

  const handleUpdate = () => {
    setModalOpen(true);
  };
  const modalInfo = {
    visa,
    modalOpen,
    setModalOpen,
  };

  return (
    <>
      <td className="border px-4 py-2">{visa.countryName}</td>
      <td className="border px-4 py-2">
        <img className="w-5" src={visa.countryImage} alt="" />
      </td>
      <td className="border px-4 py-2">{visa.vistaType}</td>
      <td className="border px-4 py-2">{visa.processingTime}</td>
      <td className="border px-4 py-2">{visa.fee}</td>
      <td className="border px-4 py-2">{visa.validity}</td>
      <td className="border px-4 py-2">{visa.applicationMethod}</td>
      <td className="border px-4 py-2">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => handleUpdate()}
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
      </td>
      <UpdateModal info={modalInfo} />
    </>
  );
};

MyVisaInfo.propTypes = {
  visa: PropTypes.object,
  allData: PropTypes.object,
};

export default MyVisaInfo;
