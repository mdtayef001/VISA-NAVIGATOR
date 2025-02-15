import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const visasData = useLoaderData();
  const countries = [
    {
      country: "Thailand",
      visaType: "Visa-on-arrival",
      duration: "15-30 days",
      cost: "$30",
    },
    {
      country: "Maldives",
      visaType: "Visa-on-arrival",
      duration: "30 days",
      cost: "Free",
    },
    {
      country: "Indonesia (Bali)",
      visaType: "Visa-free/on-arrival",
      duration: "30 days",
      cost: "Free/$35",
    },
    {
      country: "UAE (Dubai)",
      visaType: "E-visa/Transit Visa",
      duration: "14-90 days",
      cost: "From $10",
    },
    {
      country: "Sri Lanka",
      visaType: "ETA (e-visa)",
      duration: "30 days",
      cost: "$20-$35",
    },
    {
      country: "Cambodia",
      visaType: "Visa-on-arrival",
      duration: "30 days",
      cost: "$30",
    },
    {
      country: "Nepal",
      visaType: "Visa-on-arrival",
      duration: "15-90 days",
      cost: "$25-$40",
    },
    {
      country: "Kenya",
      visaType: "E-visa",
      duration: "90 days",
      cost: "$50",
    },
    {
      country: "Mexico",
      visaType: "Visa-free/ETA",
      duration: "180 days",
      cost: "Free/$10",
    },
    {
      country: "Turkey",
      visaType: "E-visa",
      duration: "30-90 days",
      cost: "$35-$50",
    },
  ];
  return (
    <section className="container mx-auto mt-5 lg:mt-10 p-4">
      {/* Banner section */}
      <div className="carousel w-full h-96 ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://do.usembassy.gov/wp-content/uploads/sites/117/2024/01/ATC-Jan-29_ATC.png"
            className="rounded-xl w-full  "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/7/328545237/BE/CP/HW/3831859/tourist-visa-service-500x500.jpeg"
            className="w-full rounded-xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://in.usembassy.gov/wp-content/uploads/sites/71/Click-here-to-access-the-navigator-1140-%C3%97-440-px-1140-%C3%97-450-px-1.png"
            className="w-full  rounded-xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* Latest visas section */}
      <div>
        <h1 className="text-center font-bold my-10 text-2xl">Latest visas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {visasData.map((visa) => (
            <div key={visa._id} className="card border shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={visa.countryImage}
                  alt="Shoes"
                  className="rounded-xl w-full h-52 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{visa.countryName}</h2>
                <p>Visa Type: {visa.vistaType}</p>
                <p>Processing Time: {visa.processingTime}</p>
                <p>Fee: ${visa.fee}</p>
                <p>Validity: {visa.validity}</p>
                <p>Application Method: {visa.applicationMethod}</p>
                <div className="card-actions">
                  <Link
                    to={`/visas/${visa._id}`}
                    className=" btn border-none bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 mb-20 text-center">
          <Link
            className="btn btn-lg border-none bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            to={"/all-visas"}
          >
            See all visas
          </Link>
        </div>
      </div>
      {/* Question */}
      <div className="mb-10">
        <h1 className="text-center text-2xl font-bold">Questions</h1>
        <div className="mt-10 space-y-5">
          <div
            tabIndex={0}
            className="collapse collapse-plus border-base-300 border"
          >
            <div className="collapse-title text-xl font-medium">
              Q: What is a visa?
            </div>
            <div className="collapse-content">
              <p>
                <big>A:</big> visa is an official document issued by a country
                that allows a foreign national to enter, stay, or leave that
                country for a specified period under certain conditions.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border-base-300 border"
          >
            <div className="collapse-title text-xl font-medium">
              Q: How do I know if I need a visa to travel to a specific country?
            </div>
            <div className="collapse-content">
              <p>
                <big>A:</big> Visa requirements depend on your nationality and
                destination. Use our Visa Eligibility Checker to see if a visa
                is required for your trip.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border-base-300 border"
          >
            <div className="collapse-title text-xl font-medium">
              Q: Can I apply for a visa online?
            </div>
            <div className="collapse-content">
              <p>
                <big>A:</big> Many countries offer e-visas or online visa
                applications for certain visa types. Check the specific visa
                requirements for your destination on our site.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Tourist Visa */}
      <div>
        <div className="p-3 lg:p-6 mb-10">
          <h1 className="text-2xl font-bold mb-10 text-center">
            Top 10 Easiest Countries to Visit with a Tourist Visa
          </h1>

          {/* Table for Desktop */}
          <div className="hidden md:block">
            <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Country</th>
                  <th className="px-4 py-2 text-left">Visa Type</th>
                  <th className="px-4 py-2 text-left">Duration</th>
                  <th className="px-4 py-2 text-left">Cost</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-gray-200`}
                  >
                    <td className="border px-4 py-2">{item.country}</td>
                    <td className="border px-4 py-2">{item.visaType}</td>
                    <td className="border px-4 py-2">{item.duration}</td>
                    <td className="border px-4 py-2">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for Mobile */}
          <div className="block md:hidden">
            {countries.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-md mb-4 p-4 bg-white"
              >
                <h2 className="text-lg font-bold text-blue-500">
                  {item.country}
                </h2>
                <p>
                  <span className="font-semibold">Visa Type:</span>{" "}
                  {item.visaType}
                </p>
                <p>
                  <span className="font-semibold">Duration:</span>{" "}
                  {item.duration}
                </p>
                <p>
                  <span className="font-semibold">Cost:</span> {item.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
