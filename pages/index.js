import Link from "../src/components/Link";
import Footer from "../src/components/patterns/Footer";
import React from "react";

function Title({ children, as }) {
  const Tag = as || "h1";

  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </React.Fragment>
  );
}

export default function HomePage() {
  return (
    <div>
      <Title as="h2">Alura Cases - Home Page</Title>
      <Link href="/faq">Ir para o FAQ</Link>
      <Footer />
    </div>
  );
}
