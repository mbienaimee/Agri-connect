import React from "react";
import about from "../../public/test.jpg";
import ab1 from "../../public/1 about.jpg";
import ab2 from "../../public/2 about.jpg";
import { useSpring, animated } from "react-spring";
import soja from "../../public/Soja.jpg";

const AboutUs = () => {

  const Number = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 600,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${about})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: 0,
            left: 0,
            height: "60%",
            width: "100%",
            zIndex: "-1",
            position: "absolute",
          }}
          className="border border-blue-950 pb-56"
        ></div>
        <div className="mt-20">
          <h1 className="flex justify-center text-white font-extrabold text-lg">
            About Us
          </h1>
        </div>
      </div>

      <div className="mt-20 md:mt-32 lg:mt-72 border bg-[#F3F6F0] p-4 md:p-12 lg:p-24">
        <div className="flex flex-col md:flex-row md:space-x-16">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="border bg-white border-transparent shadow-lg p-4 md:p-12">
              <h1 className="text-[#45AB49] font-bold">Our Vision</h1>
              <p className="mt-4 md:mt-8 font-semibold">
                To become the leading global platform that connects consumers with
                the finest organic produce, fostering a sustainable future by
                promoting the benefits of organic farming and supporting
                specialized farmers worldwide. We envision a world where healthy,
                organic food is accessible to all, where consumers are empowered
                to make informed choices about their nutrition, and where farmers
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="border bg-white border-transparent shadow-lg p-4 md:p-12">
              <h1 className="text-[#45AB49] font-bold">Our Mission</h1>
              <p className="mt-4 md:mt-8 font-semibold">
                Our mission is to unearth and deliver top-tier organic products,
                including fruits, vegetables, and more, from specialized farmers
                to our customers. We are committed to ensuring the highest quality
                and sustainability standards while empowering farmers and
                enriching the health and well-being of our consumers through
                fresh, organic produce.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${soja})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: 0,
            left: 0,
            height: "80%",
            width: "100%",
          }}
          className="flex justify-around text-2xl font-bold text-white p-4 md:p-12 my-8 md:my-[8rem]"
        >
          <div>
            <Number n={1500} />
            <h4 className="text-white">Satisfied Clients</h4>
          </div>
          <div>
            <Number n={2000} />
            <h4 className="text-white">Our Products</h4>
          </div>
          <div>
            <Number n={1200} />
            <h4 className="text-white">Award Winning</h4>
          </div>
        </div>
        <div className="my-8 md:my-[12rem] flex flex-col md:flex-row md:gap-16">
          <div className="md:w-1/2">
            <p className="text-orange-400 font-bold mb-2 md:mb-5 text-2xl">
              WHY CHOOSE US{" "}
            </p>
            <p className="text-2xl font-bold mt-2">Organic & Healthy</p>
            <p className="text-2xl font-bold mt-2">Foods Provider Farm</p>

            <p className="mt-4 md:mt-8 font-semibold">
              There many variations of lorem ipsum available, but the majority
              have suffered <br />
              alterration in some form, by injected humour, or randomised words
              which don't look <br /> even believable. If you are going to use a
              passage of Lorem Ipsum
            </p>
            <br />

            <br />
            <div className="bg-white border rounded-lg p-4 md:p-8">
              <p>Vegetables & Fruits</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum facere quisquam sunt at earum, commodi distinctio
                sint magnam tempora, molestiae consequatur <br />
                iusto deleniti rerum, in ipsum nostrum porro asperiores. Quas!
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="transform duration-500 hover:rotate-12">
              <img
                src={ab1}
                alt=""
                className="w-40 md:w-[20rem] rounded-full border-8 border-[#FF9C00] mb-4 md:mb-0"
              />
              <img
                src={ab2}
                alt=""
                className="w-40 md:w-[20rem] h-40 md:h-[20rem] rounded-full border-8 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
