import { FC } from "react";

import { IconProps } from "./icon";

export const XIcon: FC<IconProps> = ({
  size = 20,
  fill = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.1707 1.875H17.9273L11.9048 8.75833L18.9898 18.125H13.4423L9.09733 12.4442L4.12569 18.125H1.36736L7.80903 10.7625L1.01236 1.875H6.70069L10.6282 7.0675L15.1707 1.875ZM14.2032 16.475H15.7307L5.87069 3.43833H4.23153L14.2032 16.475Z"
        fill={fill}
      />
    </svg>
  );
};
