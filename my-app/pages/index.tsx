
import { ScrollContainer, HorizontalSection } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

export default function Home() {
  return (
    <ScrollContainer>
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1>Hello World!</h1>
      </section>
      <HorizontalSection>
      <section
        style={{
          height: "100vh",
          width:"100vw",
          display: "fixed",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1>Bye World!</h1>
      </section>
      <section
        style={{
          height: "100vh",
          width:"100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1>Bye World!</h1>
      </section>
      </HorizontalSection>
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1>Hello World!!</h1>
      </section>
    </ScrollContainer>
  );
}
