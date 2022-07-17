import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Button, Container } from "@components/atoms";
import { About, Speakers } from "@components/organisms";
import { ROUTES } from "src/routes";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Container>
        <div className="mb-24">
          <img
            className="h-96 w-full max-w-screen-2xl object-cover rounded-lg"
            src={require("@assets/images/extended-banner.jpeg")}
            alt=""
          />
        </div>

        <div className="mb-24">
          <About />
        </div>

        <section className="mb-24 bg-gra">
          <Container className="space-y-14">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold">Speakers</h1>
              <p className="text-lg font-semibold">
                Our speakers are influential folks & allies who have been associated with communities within their
                organisations, cities, country and beyond.
              </p>
            </div>
            <Speakers featured />

            <div className="flex items-center justify-start">
              <Button
                linkTo={ROUTES.SPEAKERS}
                text="See All Speakers"
                icon={<FiChevronRight />}
              />
            </div>
          </Container>
        </section>
      </Container>
    </div>
  );
}

export default Home;
