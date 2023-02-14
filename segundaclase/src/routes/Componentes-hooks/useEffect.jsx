import React, { useEffect, useState } from "react";

// useState
export default function Example(){
const [count,setCount] = useState(0);

// useEffect(() => {
//     setCount(count + 1)
// },[])

return (
    <div>
      <p>You clicked {count} times</p>

      {/* <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
    </div>
  );
}


