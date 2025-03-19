import { auth } from "@/lib/config.firebase";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const actionCodeSettings = {
    url: process.env.FRONTEND_URL+"/api/auth/register-with-email", // Remplace avec ton URL de redirection
    handleCodeInApp: true, // Indique que le lien sera géré dans l'application
};

export const sendMagicLink = async (email: string) => {
    try {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        window.localStorage.setItem("emailForSignIn", email); // Sauvegarde l'email
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};
