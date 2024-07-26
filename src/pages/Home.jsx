import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import "./Farmerr.css";
import arrival1 from "../../public/arrival1.png";
import arrival2 from "../../public/arrival2.png";
import arrival3 from "../../public/arrival3.png";
import arrival4 from "../../public/arrival4.png";
import ReactStars from "react-rating-stars-component";
import Footer from "./Footer";
import profile1 from "../../public/profile1.jpg";
import profile2 from "../../public/profile2.jpg";
import profile3 from "../../public/profile3.jpg";

const Home = () => {
  const rating = 5;
  return (
    <div>
      <div className="bg-[url('/slider-01.jpg')] bg-cover w-full h-[96vh] flex flex-col justify-center pl-4 sm:pl-20 gap-10 mb-16">
        <h2 className="text-3xl sm:text-2xl font-semibold text-[#FF9C00]">
          Welcome to AGRIsales
        </h2>
        <h4 className="text-4xl sm:text-7xl text-white font-urbanist font-bold">
          Grow, Connect, and <br />
          Thrive Together
        </h4>
        <Link
          to="/Login"
          className="text-white bg-[#FF9C00] px-4 py-3 w-1/2 sm:w-1/4 md:w-1/5 text-center text-lg font-semibold rounded-lg hover:bg-[#45AB49]"
        >
          Shop here
        </Link>
      </div>
      <div className="bg-[#f3f6f0] min-h-[90vh] flex flex-col md:flex-row justify-around gap-8 p-4 sm:px-24 sm:py-8">
        <div className="flex flex-col gap-8 md:w-[60vh]">
          <img
            src="fresh.jpg"
            alt="fresh fruit"
            className="w-full h-48 sm:h-[35vh] object-cover"
          />
          <img
            src="agrisal.jpg"
            alt="tea"
            className="w-full h-48 sm:h-[33vh] rounded object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-[30rem] text-lg">
          <h2 className="text-[#FF9C00]">ABOUT COMPANY</h2>
          <p className="font-urbanist font-semibold text-2xl sm:text-4xl">
            Organic & Healthy Foods Provider Farming
          </p>
          <BoxWrapper>
            <h2 className="font-semibold pb-2">Agriculture</h2>
            <p>
              Experience the unique flavors and traditions of our region. We
              cultivate locally-sourced that reflects the rich heritage of our
              land.
            </p>
          </BoxWrapper>
          <BoxWrapper>
            <h2 className="font-semibold pb-2">Vegetables & Fruits</h2>
            <p>
              Nature's Bounty, Delivered Fresh. Savor the vibrant colors and
              exceptional flavors of our seasonal fruits and vegetables.
            </p>
          </BoxWrapper>
          <Link
            to="/Login"
            className="text-white hover:bg-[#FF9C00] px-4 py-3 w-1/2 sm:w-1/3 text-center text-lg font-semibold rounded-lg bg-[#45AB49] ml-0 md:ml-12"
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="bg-[#F3F6F0] pt-6">
        <div className="flex justify-center text-[#FF9C00] font-urbanist font-semibold text-lg">
          Organic Products
        </div>
        <div className="flex justify-center font-urbanist font-semibold text-2xl sm:text-2xl pt-4">
          New Arrival Goods
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 pt-24 px-4 sm:px-24">
          {[arrival1, arrival2, arrival3, arrival4].map((item, index) => (
            <div
              key={index}
              style={{
                clipPath: "inset(0% 0% 15% 10% round 0% 15% 0 15%)",
              }}
              className="border w-full bg-white border-transparent shadow-lg p-8 flex flex-col sm:flex-row  md:flex-row  items-center gap-2"
            >
              <img
                src={item}
                alt="new arrival"
                className="w-1/2 h-40 transform transition duration-500 hover:scale-110"
              />
              <div className="text-center gap-1">
                <h3 className="font-urbanist font-bold text-lg sm:mb-1 hover:text-[#FF9C00]">
                  Vegan Fresh Tomato
                </h3>
                <p className="p-4 text-[#45AB49] font-bold  sm:mt-0 sm:mtb-0 sm:text-1xl">
                  $87.00 (per Kg)
                </p>
                <p className="font-semibold sm:text-1xl">
                  Sumptuous, filling, and temptingly healthy, our Biona Organi
                </p>
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  activeColor="#FF890B"
                  edit={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[profile1, profile2, profile3].map((profile, index) => (
              <blockquote
                key={index}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={profile}
                    alt="customer"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {
                        ["Saranda Scott", "Christy Sarah", "Desmond Scott"][
                          index
                        ]
                      }
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  {
                    [
                      "I've been sourcing agricultural products for my farm for years, but nothing compares to the quality and service I experienced with Agrisales. The knowledgeable staff guided me in choosing the right products for my soil and climate, making a noticeable difference in my farm's productivity. I highly recommend Agrisales for any farmer looking to enhance their operations.",
                      "Their commitment to quality and customer satisfaction is unmatched. I purchased a range of tools and equipment from them, and the durability and efficiency of these products have exceeded my expectations. Agrisales has become my go-to source for all agricultural needs, and I couldn't be happier with the results.",
                      "The staff's expertise and willingness to assist with my queries were incredibly reassuring. Thanks to Agrisales, my farm is thriving, and I've seen a significant increase in both yield and quality of my produce. Agrisales is truly a customer's best friend.",
                    ][index]
                  }
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

function BoxWrapper({ children }) {
  return <div className="bg-white py-5 px-8 mb-7 rounded-lg">{children}</div>;
}
