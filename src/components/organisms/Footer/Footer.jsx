import { Container } from "@components/atoms/Container/Container";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-grey-900 border-b border-gray-700">
        <Container className="text-center space-x-5 text-white py-10">
          <a
            className="hover:underline"
            href="https://developers.google.com/community/gdg/organizers#community-guidelines"
            target="_blank"
            rel="noreferrer"
          >
            Code of Conduct
          </a>
          <a
            className="hover:underline"
            href="https://developers.google.com/community-guidelines"
            target="_blank"
            rel="noreferrer"
          >
            Community Guidelines
          </a>
        </Container>
      </div>
      <div className="bg-grey-900">
        <Container className="text-center text-white py-3">
          <div>&copy; Copyright 2021 GDG Jakarta | All Right Reserved</div>
        </Container>
      </div>
    </footer>
  );
};
