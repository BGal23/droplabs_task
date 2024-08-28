import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 10rem)",
  },
  productWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000",
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
