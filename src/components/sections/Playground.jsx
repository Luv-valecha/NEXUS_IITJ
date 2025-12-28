import React, { useEffect, useRef, useState } from "react";

const Playground = () => {
  return (
    <div className="w-full overflow-x-auto space-y-6">
      <div
        className={`
          text-6xl font-bold text-amber-50 text-center
          transition-all duration-700 ease-out mb-10
          "opacity-100 translate-y-0"
        `}
      >
        Playground
      </div>

      {/* Solar System Scope */}
      <div
        className="
        h-185
          min-w-[500px]
          min-h-[400px]
          mx-auto
          border-2
          border-[#0f5c6e]
        "
      >
        <iframe
          src="https://www.solarsystemscope.com/iframe"
          title="Solar System Scope"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Playground;