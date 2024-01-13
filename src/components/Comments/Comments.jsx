import CardComment from "./CardComment";
import { comments } from "@/utils/mockData";

const Comments = () => {
  return (
    <section
      className="text-gray-600 body-font relative"
      style={{
        backgroundImage: "url(/assets/b2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-5 py-10 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10">
          Opiniones de nuestros clientes
        </h1>
        <div className="flex flex-wrap -m-4">
          {comments?.map((client) => (
            <CardComment
              key={client.name}
              name={client.name}
              position={client.position}
              img={client.img}
              opinion={client.opinion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
