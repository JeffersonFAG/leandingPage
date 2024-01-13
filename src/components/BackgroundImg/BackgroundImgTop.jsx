const BackgroundImgTop = () => {
  return (
    <div
      className="absolute left-0 w-full h-full -z-10"
      style={{
        backgroundImage: "url(/assets/b2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default BackgroundImgTop;
