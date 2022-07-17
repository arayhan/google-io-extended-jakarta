import React from "react";
import { Container } from "@components/atoms";
import { About } from "@components/organisms";

function Home() {
  return (
    <div>
      <Container>
        <div>
          <img
            className="h-96 w-full max-w-screen-2xl object-cover rounded-lg"
            src={require("@assets/images/extended-banner.jpeg")}
            alt=""
          />
        </div>
        <About />
      </Container>
    </div>
  );
}

export default Home;
