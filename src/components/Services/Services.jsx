import { services } from "@/utils/mockData";
import CardServices from "./CardServices";
import BackgroundImg from "../BackgroundImg/BackgroundImg";
import BackgroundImgBtt from "../BackgroundImg/BackgroundImg";

const Services2 = () => {
  return (
    <section
      class="text-gray-600 body-font"
      style={{
        backgroundImage: "url(/assets/b1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div class="container px-5 py-10 mx-auto">
        <div class="text-center mb-10">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Nuestros servicios
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            En Oasis, contamos con personal de primera categoria para cumplir
            con tus espectativas y hacer tus ideas realidad. Cada uno de
            nuestros servicios está disponible para empezar de manera inmediata.
          </p>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {services.map((service, index) => (
            <CardServices key={index} service={service.service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
