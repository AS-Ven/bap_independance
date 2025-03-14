import InfoCards from "@/components/cards/info-cards";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import RowMenu from "@/components/sections/row-menu";
import Title from "@/components/sections/title";

const Home_2 = () => {

    const infoCardsList = [
        {
            "title": "Fake news : Apprenez à repérer la désinformation",
            "subtitle": "Les fausses informations se propagent rapidement sur les réseaux sociaux, influençant les opinions et comportements des jeunes. Voici comment les aider à développer leur esprit critique :",
            "text": [
                {
                    "title": "Expliquer ce qu'est une fake news :",
                    "description": "Une fausse information est souvent créée pour manipuler ou tromper. Montrez à votre enfant des exemples concrets de fake news et discutez-en ensemble.",
                },
                {
                    "title": "Apprendre à vérifier une information :",
                    "description": "Avant de croire ou partager une information, il faut vérifier la source. Est-elle fiable ? Est-ce un média reconnu ? Utilisez des outils comme Hoaxbuster, Decodex (Le Monde) ou Factuel (AFP) pour vérifier une information."
                },
                {
                    "title": "Encourager le doute et la réflexion :",
                    "description": "Si une information semble choquante ou trop incroyable, il faut prendre du recul et chercher plusieurs sources avant d’y croire."
                }
            ]
        },
        {
            "title": "Fake news : Apprenez à repérer la désinformation",
            "subtitle": "Les fausses informations se propagent rapidement sur les réseaux sociaux, influençant les opinions et comportements des jeunes. Voici comment les aider à développer leur esprit critique :",
            "text": [
                {
                    "title": "Expliquer ce qu'est une fake news :",
                    "description": "Une fausse information est souvent créée pour manipuler ou tromper. Montrez à votre enfant des exemples concrets de fake news et discutez-en ensemble.",
                },
                {
                    "title": "Apprendre à vérifier une information :",
                    "description": "Avant de croire ou partager une information, il faut vérifier la source. Est-elle fiable ? Est-ce un média reconnu ? Utilisez des outils comme Hoaxbuster, Decodex (Le Monde) ou Factuel (AFP) pour vérifier une information."
                },
                {
                    "title": "Encourager le doute et la réflexion :",
                    "description": "Si une information semble choquante ou trop incroyable, il faut prendre du recul et chercher plusieurs sources avant d’y croire."
                }
            ]
        },
        {
            "title": "Fake news : Apprenez à repérer la désinformation",
            "subtitle": "Les fausses informations se propagent rapidement sur les réseaux sociaux, influençant les opinions et comportements des jeunes. Voici comment les aider à développer leur esprit critique :",
            "text": [
                {
                    "title": "Expliquer ce qu'est une fake news :",
                    "description": "Une fausse information est souvent créée pour manipuler ou tromper. Montrez à votre enfant des exemples concrets de fake news et discutez-en ensemble.",
                },
                {
                    "title": "Apprendre à vérifier une information :",
                    "description": "Avant de croire ou partager une information, il faut vérifier la source. Est-elle fiable ? Est-ce un média reconnu ? Utilisez des outils comme Hoaxbuster, Decodex (Le Monde) ou Factuel (AFP) pour vérifier une information."
                },
                {
                    "title": "Encourager le doute et la réflexion :",
                    "description": "Si une information semble choquante ou trop incroyable, il faut prendre du recul et chercher plusieurs sources avant d’y croire."
                }
            ]
        }
    ]

  return (
    <>
      <Header></Header>
      <main>
        <Title
          title="Protégez vos enfants des dangers des réseaux sociaux"
          description="Les réseaux sociaux font partie du quotidien des enfants et des adolescents, mais ils présentent aussi des risques. En tant que parent, il est essentiel de les accompagner pour une utilisation responsable et sécurisée."
          color="orange"
        ></Title>
        <div className="flex flex-col justify-around items-start gap-8 my-8 bg-orange-500">
            {
                infoCardsList.map((e, i) => (
                    <InfoCards
                        title={e.title}
                        subTitle={e.subtitle}
                        listText={e.text}
                        color="orange"
                        key={i} 
                    ></InfoCards>
                ))
            }
        </div>
        <RowMenu color="orange"></RowMenu>
      </main>
      <Footer color="orange"></Footer>
    </>
  );
}
 
export default Home_2;