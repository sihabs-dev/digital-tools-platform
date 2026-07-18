import React, { Suspense } from "react";
import MainHeading from "./mainHeading";
import CardContainer from "./cardContainer";

const cardDataPromise = fetch("/cardData.json").then((res) => res.json());

const Main = () => {
  return (
    <main className="container mx-auto">
      <MainHeading />
      <Suspense
        fallback={
          <span className="loading loading-spinner loading-xl w-17 h-17 block mx-auto mt-24"></span>
        }
      >
        <CardContainer cardDataPromise={cardDataPromise} />
      </Suspense>
    </main>
  );
};

export default Main;
