import * as React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../../assets/logo.png"

export default function ImageAvatars({sx}) {
  return <Avatar alt="Kube Kode" src={logo} sx={sx} />;
}
