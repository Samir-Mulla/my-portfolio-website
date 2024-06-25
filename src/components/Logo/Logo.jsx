import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={90}
    height={50}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="3 0 42 24"
    {...props}
  >
    <path
      stroke="none"
      d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM17.657 12l-3.536 3.536-1.414-1.415L14.828 12l-2.12-2.121 1.413-1.415zM6.343 12 9.88 8.464l1.414 1.415L9.172 12l2.12 2.121-1.413 1.415z"
    />
    <text x={25} y={14} fontSize={9} fontStyle="italic" fontWeight={600}>
      {"Dev_"}
    </text>
  </svg>
);
export default SvgComponent;
