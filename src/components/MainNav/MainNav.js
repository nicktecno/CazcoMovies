import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { IoIosFlame } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosTv } from "react-icons/io";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#393F43",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/series");
    else if (value === 3) history.push("/search");
  });

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Top 10"
        icon={<IoIosFlame size="30px" />}
      />

      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MdMovie size="30px" />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<IoIosTv size="30px" />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<FiSearch size="30px" />}
      />
    </BottomNavigation>
  );
}
