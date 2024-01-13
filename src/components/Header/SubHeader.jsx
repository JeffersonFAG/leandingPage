const SubHeader = () => {
  return (
    <section class="text-gray-600 body-font  bg-transparent animate-fade-up animate-once animate-duration-[4000ms]">
      <div class="container px-5 py-2 mx-auto">
        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
            Nos enorgullece ofrecer obras originales, diseñadas meticulosamente
            para reflejar la visión y el estilo de cada individuo.
          </h1>
          <button class="flex-shrink-0 text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg mt-10 sm:mt-0 ">
            Cotizar
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
