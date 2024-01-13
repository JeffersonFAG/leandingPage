import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <header className="text-gray-600 body-font text-pretty">
      <div className="flex flex-col text-center w-full h-screen bg-cover bg-center">
        <div className="flex flex-col justify-center items-center h-full text-white">
          <div
            className="absolute w-full h-full -z-10 animate-shake animate-twice animate-duration-[10000ms] animate-ease-in-out"
            style={{
              backgroundImage: "url(/assets/header-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h1 className="sm:text-4xl  px-6 text-3xl font-medium title-font mb-4 z-2 animate-fade-up animate-once animate-duration-[4000ms]">
            <strong>
              Oasis construcciones: Transformamos tus Sueños en Piscinas Únicas
            </strong>
          </h1>
          {/* <p className="lg:w-2/3  px-6 mx-auto leading-snug text-3xl z-2 animate-fade-up animate-once animate-duration-[4000ms]">
            Nos enorgullece ofrecer obras originales y únicas, diseñadas
            meticulosamente para reflejar la visión y el estilo de cada
            individuo.
          </p> */}
          <SubHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
