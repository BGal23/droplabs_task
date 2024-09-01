import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  productWrapper: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    marginTop: "1rem",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "0.5rem",
  },
  image: {
    padding: "0.5rem",
    background: "white",
    border: "1px solid lightgrey",
    borderRadius: "0.2rem",
  },
  description: {
    marginTop: "0.4rem",
    padding: "0.3rem",
    borderRadius: "0.4rem",
    background: "#f8f8f8",
  },
  rate: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },
  error: {
    width: "100%",
    textAlign: "center",
    marginTop: "1rem",
  },
}));

export default useStyles;
