import axios from "axios";
import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  const email = user?.user?.email;

  const currentEmail = { email };

  useEffect(() => {
    if (email) {
      axios
        .put(`http://localhost:5000/user/${email}`, currentEmail)
        .then((res) => {
          //   console.log(res.data.token);
          const accessToken = res.data.token;

          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
