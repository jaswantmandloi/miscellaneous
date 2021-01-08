const logData = () => {
  window.newrelic.addToTrace({
    name: "JSON_PLACE_HOLDER",
    start: new Date().getTime(),
  });

  window.newrelic.addPageAction("JSON_PLACE_HOLDER_Page_ACTION", {
    tt1: "addPageAction",
  });

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    // eslint-disable-next-line no-console
    .then((json) => {
      window.newrelic.addToTrace({
        name: "JSON_PLACE_HOLDER",
        start: new Date().getTime(),
        end: new Date().getTime(),
      });
      console.log(json);
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};

export const ClickContainer = () => {
  return (
    <div>
      <button onClick={logData}>Test It</button>
    </div>
  );
};
