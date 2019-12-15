import React from "react";
import { useWhere } from "use-where";

const App = () => {
  const [isBrowser, isNode, isServer] = useWhere();
  return (
    <div>
      <div>Is browser? {isBrowser()}</div>
      <div>Is node? {isNode()}</div>
      <div>Is server? {isServer()}</div>
    </div>
  );
};
export default App;
