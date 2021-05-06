import React, { useState, useEffect } from "react";
import { Api } from "../Components/Api";

export default (api) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    api
      .then((data) => {
        setState({
          error: null,
          loading: true,
          data,
        });
      })
      .catch((error) => {
        setState({ loading: false, error });
      });
  }, []);

  return { ...state };
};
