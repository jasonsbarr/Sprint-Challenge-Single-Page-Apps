import { useState, useEffect } from "react";
import { renderAsync as render } from "./utils";

/**
 * React hook for conditional rendering based on Promise
 * status for simple GET operations using fetch().
 *
 * @param {String} url - The URL to run the query on
 * @param {Object} args - Set of args passed to function
 * @param {Object} [args.initialState=null] - state to initialize prior to fetch call
 * @param {Boolean} [args.initialPersist=false] - whether initial state should be rendered while Promise is pending
 * @param {String} [args.method="json"] - response object method
 * @returns {Object}
 */
export const useFetchGet = (
  url,
  {
    initialState = null,
    initialPersist = false,
    method = "json",
  } = {},
) => {
  const [state, setState] = useState({
    ...initialState,
    initial: !!initialState,
    pending: !initialState,
    data: null,
    error: null,
  });

  useEffect(() => {
    setState({ ...state, pending: true, initial: initialPersist });
    fetch(url)
      .then(response => response[method]())
      .then(data =>
        setState({ ...state, data, initial: false, pending: false }),
      )
      .catch(error =>
        setState({ ...state, error, initial: false, pending: false }),
      );
  }, [initialPersist, method, url]);

  return render(state);
};

export default useFetchGet;
