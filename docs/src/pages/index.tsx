import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero bg-base-300 py-10 text-center relative overflow-hidden">
      <div className="hero-content">
        <div>
          <Heading as="h1" className="hero__title text-4xl my-4 font-bold">
            {siteConfig.title}
          </Heading>
          <p className="my-4 text-2xl">{siteConfig.tagline}</p>
          <div className="flex align-center justify-center flex-col sm:flex-row gap-4">
            <Link className="btn btn-primary btn-lg" to="/docs/intro">
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
