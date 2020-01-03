import React from "react";
import { useWhere } from "@react-corekit/use-where";

const App = () => {
  const [isBrowser, isNode, isServer] = useWhere();
  return (
    <div>
      <div>
        Is browser? <strong>{isBrowser() ? "Yes" : "No"}</strong>
      </div>
      <div>
        Is node? <strong>{isNode() ? "Yes" : "No"}</strong>
      </div>
      <div>
        Is server? <strong>{isServer() ? "Yes" : "No"}</strong>
      </div>
    </div>
  );
};
export default App;
