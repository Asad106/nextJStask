import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
const CustomIcon = (props) => {
  return (
    <SvgIcon {...props}>{<path d={props.imgpath} fill="black" />}</SvgIcon>
  );
};
export default CustomIcon;
