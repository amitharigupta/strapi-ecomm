import React from "react";
import { useRouter } from "next/router";

const order = () => {
    const router = useRouter();
    console.log(router);

  return (
    <div>order</div>
  )
}

export default order