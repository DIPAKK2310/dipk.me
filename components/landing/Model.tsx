"use client";
import React from "react";
import ComputersCanvas from "@/components/canvas/ComputersCanvas";

const Model = () => {
  return (
    <div className=" w-full h-full  mx-auto">
      <div className="w-full h-1/2">
        <ComputersCanvas />
      </div>
    </div>
  );
};

export default Model;
