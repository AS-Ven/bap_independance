import InfoCards from "@/components/cards/info-cards";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import RowMenu from "@/components/sections/row-menu";
import Title from "@/components/sections/title";
import phone from "@/assets/phone.png"

const Reaseau = () => {

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
            "title": "Cyberharcèlement : Prévenir et réagir",
            "subtitle": "Le cyberharcèlement touche de nombreux jeunes et peut avoir des conséquences graves sur leur bien-être. En tant que parent, voici comment vous pouvez les protéger :",
            "text": [
                {
                    "title": "Sensibiliser dès le plus jeune âge:",
                    "description": "Expliquez à votre enfant que tout ce qu’il publie en ligne peut être vu par d’autres et avoir des conséquences. Discutez des comportements toxiques et du respect des autres en ligne.",
                },
                {
                    "title": "Mettre en place des règles de sécurité :",
                    "description": "Ne jamais partager d’informations personnelles (adresse, numéro de téléphone, école…). Utiliser des paramètres de confidentialité pour contrôler qui peut voir leurs publications. Faire attention aux inconnus en ligne : ne pas accepter des demandes d’amis de personnes qu’ils ne connaissent pas dans la vraie vie."
                },
                {
                    "title": "Comment réagir en cas de cyberharcèlement ? :",
                    "description": "Encourager votre enfant à en parler : il doit savoir qu’il peut se confier à vous ou à un adulte de confiance. Bloquer et signaler les harceleurs sur les réseaux sociaux et aux plateformes concernées. Garder des preuves (captures d’écran, messages) en cas de plainte ou de signalement aux autorités."
                }
            ]
        },
        {
            "title": "Gestion du temps d’écran : Trouver un équilibre",
            "subtitle": "",
            "text": [
                {
                    "title": "Fixer des règles claires :",
                    "description": "Définir des plages horaires sans écran (ex : pas d’écrans avant le coucher, pendant les repas ou les devoirs). Limiter le temps passé sur les réseaux sociaux avec des applications comme Family Link (Google) ou Screen Time (Apple)."
                },
                {
                    "title": "Proposer des alternatives aux écrans :",
                    "description": "Encourager des activités hors ligne : sport, jeux de société, lecture, dessin… Organiser des moments en famille sans écrans (sorties, discussions, ateliers créatifs)."
                },
                {
                    "title": "Donner l’exemple :",
                    "description": "Les enfants imitent les adultes. Montrez-leur que vous aussi, vous savez limiter votre temps d’écran et privilégier d’autres activités."
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
          image={phone}
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
 
export default Reaseau;