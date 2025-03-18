'use client'

import { sendMail } from "@/app/api/send/route";

const FormContact = () => {

    return (
        <form action={sendMail} className="flex flex-col justify-between items-center gap-8">
            <input type="text" name="name" placeholder="Nom" required className="border-2 border-gray-300 w-full p-2 px-4"/>
            <input type="email" name="email" placeholder="Email" required className="border-2 border-gray-300 w-full p-2 px-4"/>
            <textarea name="message" placeholder="Sujet" required className="h-28 border-2 border-gray-300 w-full p-2 px-4"></textarea>
            <button type="submit" className="bg-rose-900 text-white text-2xl py-3 px-8 w-full rounded-2xl">Envoyer</button>
        </form>
    );
}

export default FormContact;