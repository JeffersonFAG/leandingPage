import Products from "@/components/Products/Products";
import Comments from "@/components/Comments/Comments";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";
import Header from "@/components/Header/Header";
import BackgroundImgBtt from "@/components/BackgroundImg/BackgroundImg";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Services />
      <Comments />
      <BackgroundImgBtt />
      <Contact />
      <Footer />
    </>
  );
}
