import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Contact from "@/components/sections/contact/contact";
import RowMenu from "@/components/sections/row-menu";
import Title from "@/components/sections/title";

const Home = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Title
          title="Contactez la Maison des Part&apos;Âges"
          description="Restons en contact pour mieux vous accompagner !"
          color="red"
        ></Title>
        <Contact></Contact>
        <RowMenu color="red"></RowMenu>
      </main>
      <Footer color="red"></Footer>
    </>
  );
}
 
export default Home;