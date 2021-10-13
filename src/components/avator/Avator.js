import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./avator.css";
import SideButton from "../button/Button";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}));

export default function BadgeAvatars(props) {
  return (
    <div className="main">
      <div className="main-frame">
        <div>
          <Stack direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={props.alt} src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </Stack>
        </div>

        <div className="nameDate">
          <h4>{props.alt}</h4>
          <p className="date">{props.Date}</p>
        </div>
      </div>
      <div>
        <span className="btn-side">
          <SideButton text="..." variant="outlite" size="25px" />
        </span>
      </div>
    </div>
  );
}
