import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebase";
import { clearUser, setUser } from "../../features/Authentication/userSlice";
import { fetchSavedJobs } from "../../features/tracker/trackerSlice";

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(fetchSavedJobs(user));
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsub();
  }, [dispatch]);

  return null;
};

export default AuthListener;
