import React, { useEffect, useState } from "react";
import axios from "axios";

const MainComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      console.log("get axios 호출");
      const result = await axios.get(
        "http://ec2-3-36-236-200.ap-northeast-2.compute.amazonaws.com:8080/api/hello"
      );
      console.log(result.data);
      setMessage(result.data.message);
    }
    fetchData();
  }, []);

  return (
    <div>
      Main 페이지
      <br></br>
      {message}
    </div>
  );
};

export default MainComponent;
