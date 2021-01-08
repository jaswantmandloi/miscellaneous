import Head from "next/head";
import MegaMenuCmp from "shared/components/megaMenuCustom/megaMenuCustom";

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
