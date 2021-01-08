import Layout from "features/material-ui/demo1/Layout/Layout";
import { ClickContainer } from "shared/components/newrelic/newrelicUtils";

export default function Demo1() {
  return (
    <Layout>
      <div>Main Content</div>
      <div>Test it</div>
      <ClickContainer />
    </Layout>
  );
}
