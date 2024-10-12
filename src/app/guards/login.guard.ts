import { getAuth, onAuthStateChanged } from "firebase/auth";

export const loginGuard = () => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Usuario está autenticado
            return true;
        } else {
            // Usuario no está autenticado, redirigir a la página de login
            window.location.href = './auth';
            return false;
        }
    });
}
