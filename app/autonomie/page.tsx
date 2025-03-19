import InfoCards from "@/components/cards/info-cards";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import RowMenu from "@/components/sections/row-menu";
import Title from "@/components/sections/title";

const Autonomie = () => {

    const infoCardsList = [
        {
            "title": "Responsabilités : Apprendre à être acteur de son quotidien",
            "subtitle": "Donner des responsabilités adaptées à l’âge de votre enfant l’aide à se sentir utile et compétent.",
            "text": [
                {
                    "title": "Confier de petites tâches quotidiennes :",
                    "description": "Ranger ses affaires, préparer son cartable, aider à mettre la table… Valorisez ses efforts pour renforcer son sentiment d’accomplissement."
                },
                {
                    "title": "Encourager la prise de décisions :",
                    "description": "Laissez-le faire des choix (vêtements, activités, organisation de son temps). Expliquez-lui les conséquences de ses décisions pour qu’il apprenne de ses erreurs."
                },
                {
                    "title": "Favoriser la résolution de problèmes :",
                    "description": "Ne donnez pas toujours la solution tout de suite, guidez-le en posant des questions. Apprenez-lui à trouver des alternatives et à analyser les situations avec recul."
                }
            ]
        },
                {
            "title": "Confiance en soi : Oser, essayer et persévérer",
            "subtitle": "Un enfant qui croit en ses capacités ose essayer et rebondit après un échec.",
            "text": [
                {
                    "title": "Valoriser ses réussites et ses efforts :",
                    "description": "Mettez en avant ses progrès plutôt que la perfection. Évitez les comparaisons avec les autres, chaque enfant évolue à son rythme."
                },
                {
                    "title": "Encourager l’initiative et l’expérimentation :",
                    "description": "Laissez-le essayer de nouvelles choses sans crainte d’échouer. Transformez les erreurs en opportunités d’apprentissage."
                },
                {
                    "title": "Favoriser une attitude positive :",
                    "description": "Adoptez un discours encourageant : remplacez « Tu es nul » par « Tu peux encore progresser ». Montrez-lui qu’il peut surmonter les difficultés avec de la patience et du travail."
                }
            ]
        }
    ]

  return (
    <>
      <Header></Header>
      <main>
        <Title
          title="Développer l’autonomie de votre enfant!"
          description="L’autonomie est essentielle pour que votre enfant grandisse en confiance et devienne responsable. En l’accompagnant progressivement, vous l’aidez à prendre des décisions, gérer ses émotions et affronter les défis du quotidien."
          color="purple"
        ></Title>
        <div className="flex flex-col justify-around items-start gap-8 my-8 bg-purple-500">
            {
                infoCardsList.map((e, i) => (
                    <InfoCards
                        title={e.title}
                        subTitle={e.subtitle}
                        listText={e.text}
                        color="purple"
                        key={i} 
                    ></InfoCards>
                ))
            }
        </div>
        <RowMenu color="purple"></RowMenu>
      </main>
      <Footer color="purple"></Footer>
    </>
  );
}
 
export default Autonomie;