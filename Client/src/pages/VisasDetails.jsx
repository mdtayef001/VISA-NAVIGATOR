import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";
import { AuthContext } from "../Provider/AuthProvider";

const VisasDetails = () => {
  const visaData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);

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
  } = visaData;

  const handleModal = () => {
    setModalOpen(true);
  };

  const modalInfo = {
    modalOpen,
    user,
    visaData,
    setModalOpen,
  };

  return (
    <section className="container mx-auto mb-20">
      <h1 className="text-center text-2xl font-bold my-10  ">
        Visa apply for <span className="text-blue-500">{countryName}</span>
      </h1>
      <div>
        <div className="w-80 mx-auto mb-5">
          <img src={countryImage} alt="" />
        </div>
        <div className="text-center space-y-4 text-xl font-medium">
          <p>
            <b>Vista Type:</b> {vistaType}
          </p>
          <div className="divider"></div>
          <p>
            <b>Processing Time:</b> {processingTime}
          </p>

          <ul className="list-inside ">
            <label>
              <b>Required Documents:</b>
            </label>
            {requiredDocuments.map((doc, i) => (
              <div key={i}>
                {doc[0] && <li className="list-disc">{doc && doc[0]}</li>}
                {doc[1] && <li className="list-disc">{doc && doc[1]}</li>}
                {doc[2] && <li className="list-disc">{doc && doc[2]}</li>}
              </div>
            ))}
          </ul>
          <div className="divider"></div>
          <p>
            <b>Details:</b> {description}
          </p>
          <div className="divider"></div>

          <p>
            <b>Age Restriction:</b> {ageRestriction}
          </p>
          <p>
            <b>Fee:</b> {fee}
          </p>
          <div className="divider"></div>

          <p>
            <b>Validity:</b> {validity}
          </p>
          <p>
            <b>ApplicationMethod:</b> {applicationMethod}
          </p>
          <div className="divider"></div>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={handleModal}
            className="btn bg-blue-500 text-white hover:bg-blue-600 border-none"
          >
            Apply for the visa
          </button>
        </div>
      </div>
      <Modal info={modalInfo} />
    </section>
  );
};

export default VisasDetails;
