import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useStyles from "./Sort.styles";

const Sort = () => {
  const classes = useStyles();

  return (
    <Box className={classes.inputWrapper}>
      <FormControl sx={{ minWidth: "15rem" }} size="small">
        <InputLabel id="sort-label">Sort</InputLabel>

        <Select labelId="sort-label" id="sort" label="Sort">
          <MenuItem value="">
            <em>Default</em>
          </MenuItem>

          <MenuItem value={"title_a-z"}>A → Z</MenuItem>

          <MenuItem value={"title_z-a"}>Z → A</MenuItem>

          <MenuItem value={"price_up"}>Price Up</MenuItem>

          <MenuItem value={"price_down"}>Price Down</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
