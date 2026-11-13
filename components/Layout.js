import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title = "My Next.js App" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A friendly starter website built with the Next.js Pages Router."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
