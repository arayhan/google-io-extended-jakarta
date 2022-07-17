import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { Footer, Header } from "@components/organisms";
import Home from "@pages/Home/Home";
import Speakers from "@pages/Speakers/Speakers";
import { Organizers } from "@pages/Organizers/Organizers";
import { Schedules } from "@pages/Schedules/Schedules";

function App() {
  return (
    <div>
      <Header />

      <main className="mt-28">
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<Home />}
          />
          <Route
            path={ROUTES.SPEAKERS}
            element={<Speakers />}
          />
          <Route
            path={ROUTES.SCHEDULES}
            element={<Schedules />}
          />
          <Route
            path={ROUTES.ORGANIZERS}
            element={<Organizers />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
