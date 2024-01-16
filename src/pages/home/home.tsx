import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topBar/topBar";

function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      navigate("/login");
    }
  });

  return (
    <>
      <TopBar />
      <div>
        <h1>HomePage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          tempore temporibus odit, at quaerat id animi voluptate. Perspiciatis
          fugiat eligendi in quos doloribus, provident accusantium.
        </p>
      </div>
    </>
  );
}

export default HomePage;
