import React from "react";
import { makeStyles } from "@material-ui/core";
// import AvatarImg from "../../assets/images/avatar.jpg";
import AvatarImg from "../../assets/images/maw.png";

const Avatar = () => {
  const classes = useStyles();
  return <img src={AvatarImg} alt="Mehdi BHA" className={classes.avatarImg} />;
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius: "50%",
    width: "250px",
    height: "250px",
    objectFit: "cover",
    // objectPosition: "0 -20px",
    boxShadow: theme.shadows[10]
  }
}));

export default Avatar;
