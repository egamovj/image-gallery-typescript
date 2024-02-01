import { SVGProps } from "react";

const EmptyCheckboxIcon = ({
  width = "24",
  ...props
}: SVGProps<SVGSVGElement>) => {
  const height = ((Number(width) * 24) / 24).toString();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="white"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      </g>
    </svg>
  );
};

export default EmptyCheckboxIcon;
