import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import { Button, Container } from "@components/atoms";
import { About, Speakers } from "@components/organisms";
import { ROUTES } from "src/routes";

function Home() {
  return (
    <div>
      <Container>
        <section className="mb-24">
          <Fade>
            <img
              className="h-96 w-full max-w-screen-2xl object-cover rounded-lg"
              src={require("@assets/images/extended-banner.jpeg")}
              alt=""
            />
          </Fade>
        </section>

        <section className="mb-24">
          <Fade>
            <About />
          </Fade>
        </section>

        <section className="mb-24 bg-gra">
          <Fade>
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
          </Fade>
        </section>
      </Container>
    </div>
  );
}

export default Home;
