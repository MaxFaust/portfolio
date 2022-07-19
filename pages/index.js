import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Max | Front-End Developer</title>
        <meta
          name="description"
          content="I’m a software developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="snap-y snap-mandatory  h-screen overflow-scroll">
        <div className="snap-start">
          <Main />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <div className="snap-center">
          <Skills />
        </div>
        <div className="snap-start">
          <Projects />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
      </div>
    </div>
  );
}
