import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Container } from "@components/atoms";
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
              <h1 className="text-4xl text-blue-700 font-semibold">Speakers</h1>
              <p className="text-lg text-gray-500">
                Our speakers are influential folks & allies who have been associated with communities within their
                organisations, cities, country and beyond.
              </p>
            </div>
            <Speakers featured />

            <div className="flex items-center justify-start">
              <Link
                className="group transition-all px-5 py-2 text-blue-700 rounded-md flex items-center space-x-5 hover:bg-gray-50"
                to={ROUTES.SPEAKERS}
              >
                <span>See All Speakers</span>
                <span className="transition-all transform group-hover:pl-2">
                  <FiChevronRight />
                </span>
              </Link>
            </div>
          </Container>
        </section>
      </Container>
    </div>
  );
}

export default Home;
