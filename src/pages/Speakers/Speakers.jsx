import React from "react";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import { Container } from "@components/atoms";
import { Speakers as SpeakersSection } from "@components/organisms";
import { CONSTANTS } from "@utils/constants";

function Speakers() {
  return (
    <div>
      <Helmet>
        <title>{CONSTANTS.PAGE_TITLE} - Speakers</title>
      </Helmet>
      <Container className="space-y-24 mb-24">
        <Fade>
          <div className="space-y-5 bg-red-300 px-6 py-16 md:px-12 md:py-24 rounded-lg border-2 border-gray-800">
            <h1 className="text-5xl md:text-7xl font-bold">Speakers.</h1>
            <p className="text-lg md:text-xl text-gray-800">
              Our speakers are influential folks & allies who have been associated with communities within their
              organisations, cities, country and beyond.
            </p>
          </div>
        </Fade>
        <Fade>
          <SpeakersSection />
        </Fade>
      </Container>
    </div>
  );
}

export default Speakers;
