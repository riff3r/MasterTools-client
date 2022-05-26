import axios from "axios";
import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  const email = user?.user?.email;

  const userInfo = {
    name: user?.user?.displayName,
    email,
  };

  console.log(userInfo);

  useEffect(() => {
    if (email) {
      axios.put(`http://localhost:5000/user/${email}`, userInfo).then((res) => {
        //   console.log(res.data.token);
        const accessToken = res.data.token;

        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
      });
    }
  }, [user, email]);

  return [token];
};

export default useToken;
