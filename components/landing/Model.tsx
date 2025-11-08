"use client";
import React from "react";
import ComputersCanvas from "@/components/canvas/ComputersCanvas";

const Model = () => {
  return (
    <div className=" w-full h-full  mx-auto mb-20">
      <div className="w-full h-[350px] md:h-[400px] lg:h-[450px]">
        <ComputersCanvas />
      </div>
    </div>
  );
};

export default Model;
