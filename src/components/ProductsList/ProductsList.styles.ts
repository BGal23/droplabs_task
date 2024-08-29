import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  productWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    transition: "background 300ms ease-in-out",
    padding: "0.5rem",

    "&:hover": {
      background: "#0001",
    },
  },
  title: {
    width: "15rem",
  },
}));

export default useStyles;
