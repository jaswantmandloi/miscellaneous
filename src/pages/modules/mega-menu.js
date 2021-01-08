import Head from "next/head";
import MegaMenuCmp from "../components/shared/megaMenu/megaMenu";

export default function MegaMenu() {
  return (
    <div>
      <Head>
        <title>MegaMenuCmp Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MegaMenuCmp />
    </div>
  );
}
