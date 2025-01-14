import { FC } from "react";

import { IconProps } from "./icon";

export const LinkedinIcon: FC<IconProps> = ({
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
        d="M15.2802 15.2825H13.0589V11.8018C13.0589 10.9718 13.0421 9.90375 11.9014 9.90375C10.7433 9.90375 10.5664 10.8069 10.5664 11.7406V15.2825H8.34517V8.125H10.4789V9.10058H10.5077C10.8058 8.53808 11.5308 7.94437 12.6139 7.94437C14.8646 7.94437 15.2808 9.42567 15.2808 11.3538L15.2802 15.2825ZM5.83645 7.14562C5.12145 7.14562 4.54707 6.56687 4.54707 5.855C4.54707 5.14375 5.12207 4.56563 5.83645 4.56563C6.54895 4.56563 7.12645 5.14375 7.12645 5.855C7.12645 6.56687 6.54832 7.14562 5.83645 7.14562ZM6.9502 15.2825H4.7227V8.125H6.9502V15.2825ZM16.3914 2.5H3.6077C2.99582 2.5 2.50082 2.98375 2.50082 3.58063V16.4194C2.50082 17.0168 2.99582 17.5 3.6077 17.5H16.3896C17.0008 17.5 17.5008 17.0168 17.5008 16.4194V3.58063C17.5008 2.98375 17.0008 2.5 16.3896 2.5H16.3914Z"
        fill={fill}
      />
    </svg>
  );
};
