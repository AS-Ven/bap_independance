import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import AboutUs from "@/components/sections/about_us";
import RowMenu from "@/components/sections/row-menu";
import Title from "@/components/sections/title";

const Home = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Title
          title="Aidez votre enfant à devenir plus autonome !"
          description="Découvrez notre guide parental pour mieux accompagner votre enfant sur les réseaux sociaux, à l'école et dans son développement personnel."
          color="red"
        ></Title>
        <AboutUs></AboutUs>
        <RowMenu color="red"></RowMenu>
      </main>
      <Footer color="red"></Footer>
    </>
  );
}
 
export default Home;