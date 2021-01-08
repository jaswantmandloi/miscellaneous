import "../styles/globals.css";
import NewRelic from "shared/components/newrelic/newrelic";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <NewRelic></NewRelic>
    </>
  );
}

export default MyApp;
