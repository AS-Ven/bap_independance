import localFont from "next/font/local";
import ColoredCards from "../cards/colored-cards";
import { color } from "@/utils/type";

const fontOlivier = localFont({ src: '../../assets/fonts/olivier_demo.ttf' })

interface aboutUs_list {
    color: color
    title: string
    description: string
}

const AboutUs = () => {

    const aboutUs_list: aboutUs_list[] = [
        {
            color: "purple",
            title: "Réussite éducative",
            description: "Accompagnement scolaire personnalisé pour les élèves du CM1 à la 3ᵉ, en partenariat avec les établissements scolaires locaux."
        },
        {
            color: "orange",
            title: "Ateliers sociolinguistiques",
            description: "Cours de français pour les personnes non francophones, proposés deux fois par semaine."
        },
        {
            color: "green",
            title: "Soutien à la parentalité",
            description: " Entretiens individuels ou familiaux pour soutenir les parents dans leur rôle, ainsi que des tables rondes sur des thématiques telles que la gestion des conflits familiaux."
        },{
            color: "blue",
            title: "Permanences sociales et juridiques",
            description: "Consultations avec des professionnels du droit, de la santé et de la médiation familiale."
        },
    ]

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-24 pt-24">
                <h2 className={`${fontOlivier.className} text-rose-900 text-7xl`}>Qui sommes-nous ?</h2>
                <p className='text-3xl font-bold text-neutral-500 text-center  w-2/3'>La Maison des Part&apos;Âges Louis-Girerd, centre social du Plessis-Robinson, offre des services et activités pour tous, renforçant le lien social.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center py-24 gap-x-40 gap-y-20">
                {
                    aboutUs_list.map((element, index) => (
                        <ColoredCards
                            key={index}
                            title={element.title}
                            description={element.description}
                            color={element.color}
                        />
                    ))
                }
            </div>
        </div>
    );
}
 
export default AboutUs;