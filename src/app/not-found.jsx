import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Sorry, the page you are looking for is not found.</h1>
      <Link href={{ pathname: "/" }}>Return to home page</Link>
    </div>
  );
};

export default NotFoundPage;
