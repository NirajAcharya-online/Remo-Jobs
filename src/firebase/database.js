import { useSelector } from "react-redux";
import { database } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

async function setUser(user) {
  try {
    await setDoc(doc(database, "user", user.uid), {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      createdAt: Date.now(),
    });
    return true;
  } catch (error) {
    return error;
  }
}
export {setUser}