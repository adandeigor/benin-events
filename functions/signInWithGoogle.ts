import { auth } from "@/lib/config.firebase";
import { prisma } from "@/lib/prisma-client";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

/**
 * Fonction pour gérer la connexion avec Google.
 * @returns {Promise<{ user: object | null, token: string | null, error: string | null }>}
 */
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);

    // Récupération des informations d'authentification
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken || null;
    const user = result.user;

    // Vérification si l'utilisateur existe déjà dans la base de données
   if (user != null) {
    try {
        const result = fetch("http://localhost:3000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            imageUrl: user.photoURL,
          }),
        });
        console.log("Utilisateur enregistré :", result);
      } catch (error) {
        console.error("Erreur lors de l'enregistrement de l'utilisateur :", error);
      }
   }
    return { user, token, error: null };
    
  } catch (error: any) {
    console.error("Erreur lors de la connexion :", error);

    return {
      user: null,
      token: null,
      error: {
        code: error.code,
        message: error.message,
        email: error.customData?.email || null,
        credential: GoogleAuthProvider.credentialFromError(error),
      },
    };
  }
};

export default signInWithGoogle;