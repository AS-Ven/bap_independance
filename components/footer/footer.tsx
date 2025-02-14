import ColorBtn from "../buttons/color-btn";

const Footer = () => {
    return (
        <footer className="bg-orange-100 flex justify-end">
            <div className="w-1/2 px-9">
                <h2 className="text-6xl py-12">N'hésitez pas à nous contacter pour avoir plus d'information !</h2>
                <p className="text-2xl">Pour plus d'informations ou pour participer aux activités, il est recommandé de contacter directement la Maison des Part'Âges au 01 46 01 51 74.</p>
                <div className="p-28 justify-center items-center">
                    <ColorBtn
                        url="/"
                        text="Contactez-nous"
                        color="red"
                    ></ColorBtn>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;