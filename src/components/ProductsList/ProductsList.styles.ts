import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  productWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    transition: "background 300ms ease-in-out",
    padding: "0.5rem",
    width: "100%",
    borderRadius: "0.4rem",
    background: "#f8f8f8",

    "&:hover": {
      background: "#eeeeee ",
    },
  },
  textWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    width: "100%",
  },
  image: {
    padding: "0.5rem",
    background: "white",
    border: "1px solid lightgrey",
    borderRadius: "0.2rem",
  },
  title: {
    minWidth: "5rem",
  },
  price: {
    fontWeight: 600,
    fontSize: "large",
    textAlign: "end",
  },
}));

export default useStyles;
