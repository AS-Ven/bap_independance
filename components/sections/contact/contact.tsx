import Image from "next/image";
import FormContact from "./form";
import Location from "../../../assets/location.png";
import { Mail, PhoneCall } from "lucide-react";

const Contact = () => {
    return (
        <div className="flex justify-between items-center px-20 py-24">
            <div className="flex flex-col w-1/2">
                <FormContact></FormContact>
                <div className="flex justify-between pt-12">
                    <div className="flex justify-center items-center gap-4">
                        <PhoneCall size={28}></PhoneCall>
                        <div className="text-xl">
                            <p className="font-bold">Téléphone</p>
                            <p>01 46 01 51 74</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <Mail size={28}></Mail>
                        <div className="text-xl">
                            <p className="font-bold">Email</p>
                            <p>mdp@plessis-robinson.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={Location}
                alt="location"
            ></Image>
        </div>
    );
}
 
export default Contact;