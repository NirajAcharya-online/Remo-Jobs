import { useSelector } from "react-redux";
import { database } from "./firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

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
async function getUser(user) {
  const docRef = doc(database, "user", user.uid);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    return error;
  }
}
async function updateUser(user, data) {
  const docRef = doc(database, "user", user.uid);
  try {
    const docSnap = await updateDoc(docRef, {
      location: data.location,
      role: data.role,
      availibility: data.availibility,
    });
    return true;
  } catch (error) {
    return error;
  }
}
export { setUser, getUser , updateUser};
