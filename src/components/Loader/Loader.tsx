import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 10rem)"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
