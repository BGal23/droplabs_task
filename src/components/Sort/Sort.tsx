import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import useStyles from "./Sort.styles";
import { useSearchParams } from "react-router-dom";

const Sort = () => {
  const [sortParam, setSortParam] = useSearchParams();
  const sort = sortParam.get("sort") || "";
  const classes = useStyles();

  const handleParam = (event: SelectChangeEvent) => {
    const selectedParam = event.target.value;
    if (selectedParam) {
      sortParam.set("sort", selectedParam);
    } else {
      sortParam.delete("sort");
    }
    setSortParam(sortParam);
  };

  return (
    <Box className={classes.inputWrapper}>
      <FormControl sx={{ minWidth: "15rem" }} size="small">
        <InputLabel id="sort-label">Sort</InputLabel>

        <Select
          labelId="sort-label"
          id="sort"
          label="Sort"
          value={sort}
          onChange={handleParam}
        >
          <MenuItem value="">
            <em>Default</em>
          </MenuItem>

          <MenuItem value={"a-z"}>A → Z</MenuItem>

          <MenuItem value={"z-a"}>Z → A</MenuItem>

          <MenuItem value={"price_up"}>Price Up</MenuItem>

          <MenuItem value={"price_down"}>Price Down</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
