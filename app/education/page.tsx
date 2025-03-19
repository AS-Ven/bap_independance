import InfoCards from "@/components/cards/info-cards";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import RowMenu from "@/components/sections/row-menu";
import Title from "@/components/sections/title";

const Education = () => {

    const infoCardsList = [
        {
            "title": "Motivation : Donner envie d’apprendre",
            "subtitle": "Un enfant motivé apprend plus facilement et avec plaisir. Voici comment l’encourager :",
            "text": [
                {
                    "title": "Valoriser ses efforts, pas seulement ses résultats :",
                    "description": "Félicitez-le pour son travail et sa persévérance, même s’il ne réussit pas du premier coup. Montrez-lui que les erreurs font partie de l’apprentissage et qu’il peut toujours s’améliorer."
                },
                {
                    "title": "Créer un environnement positif :",
                    "description": " Encouragez sa curiosité en l’aidant à relier ce qu’il apprend à ses centres d’intérêt (ex : les maths pour la cuisine, l’histoire pour les jeux vidéo). Faites des pauses régulières pour éviter la lassitude et maintenir son attention."
                },
                {
                    "title": "Fixer des objectifs atteignables :",
                    "description": " Décomposez un grand objectif en petites étapes accessibles (ex : apprendre 5 mots par jour au lieu d’une liste entière d’un coup). Célébrez chaque progrès, même minime, pour lui donner confiance en lui."
                }
            ]
        },
        {
            "title": "Organisation : Gagner en autonomie et en efficacité",
            "subtitle": "L’organisation est essentielle pour éviter le stress et la procrastination. Aidez votre enfant à structurer son travail avec ces astuces :",
            "text": [
                {
                    "title": "Créer un emploi du temps adapté :",
                    "description": "Établissez un planning clair pour équilibrer devoirs, loisirs et repos. Privilégiez des horaires réguliers pour l’aider à adopter une routine d’apprentissage."
                },
                {
                    "title": "Un espace de travail optimisé :",
                    "description": " Un bureau bien rangé, sans distractions, favorise la concentration. Encouragez une posture confortable et un bon éclairage pour éviter la fatigue."
                },
                {
                    "title": "Apprendre à gérer son temps :",
                    "description": "Utilisez la technique du Pomodoro : 25 minutes de travail concentré, puis 5 minutes de pause. Enseignez-lui à hiérarchiser ses tâches en commençant par les plus importantes ou difficiles."
                }
            ]
        },
        {
            "title": "Méthodes d’apprentissage : Apprendre plus efficacement",
            "subtitle": "Chaque enfant a sa manière d’apprendre. Expérimentez différentes méthodes pour voir laquelle lui convient le mieux :",
            "text": [
                {
                    "title": "La méthode active :",
                    "description": "Reformuler ce qu’il apprend avec ses propres mots. Expliquer une leçon à quelqu’un d’autre (un parent, un ami) pour mieux assimiler."
                },
                {
                    "title": "Les outils visuels et interactifs :",
                    "description": "Utiliser des cartes mentales pour organiser ses idées. S’appuyer sur des vidéos éducatives, des schémas et des dessins pour mieux comprendre."
                },
                {
                    "title": "Les techniques de mémorisation :",
                    "description": "Associer des notions à des images ou à des histoires pour les retenir plus facilement. Répéter plusieurs fois à intervalles réguliers (répétition espacée) pour ancrer durablement les connaissances."
                }
            ]
        },
    ]

  return (
    <>
      <Header></Header>
      <main>
        <Title
          title="Aidez votre enfant à réussir à l'école !"
          description="L’apprentissage est un parcours unique pour chaque enfant. Pour l’aider à progresser sereinement, il est essentiel de l’accompagner avec des méthodes adaptées. Découvrez des conseils pratiques pour améliorer sa motivation, son organisation et ses méthodes d’apprentissage."
          color="blue"
        ></Title>
        <div className="flex flex-col justify-around items-start gap-8 my-8 bg-blue-300">
            {
                infoCardsList.map((e, i) => (
                    <InfoCards
                        title={e.title}
                        subTitle={e.subtitle}
                        listText={e.text}
                        color="blue"
                        key={i} 
                    ></InfoCards>
                ))
            }
        </div>
        <RowMenu color="blue"></RowMenu>
      </main>
      <Footer color="blue"></Footer>
    </>
  );
}
 
export default Education;