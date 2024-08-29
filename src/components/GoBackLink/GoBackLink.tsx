import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const GoBackLink = () => {
  const [from, setFrom] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setFrom(location.state?.from || "/");
  }, [location]);

  return <Link to={from}>↩ Go Back</Link>;
};

export default GoBackLink;
