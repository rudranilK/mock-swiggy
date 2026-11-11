import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //* We want to add the listners only once
  useEffect(() => {
    //* Event listeners to know online status,
    //* when user is online this CB is fired
    //* Given to us by Window object

    window.addEventListener("offline", () => {
      console.log(`Internet Disconnected!`);
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      console.log(`Internet Re-Connected!`);
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
