import Head from "next/head";
import Banner from "../components/shared/banner/banner";

export default function BannerPage() {
  return (
    <div>
      <Head>
        <title>Banner Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
    </div>
  );
}
