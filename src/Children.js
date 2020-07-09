import React from "react";
function Children({ second }) {
  console.log("Children -> second", second);
  return <p>I am rendering every {second} second</p>;
}

export default React.memo(Children);
// export default Children;
