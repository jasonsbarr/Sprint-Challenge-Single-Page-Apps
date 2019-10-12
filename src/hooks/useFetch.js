import { useState, useEffect } from "react";
import axios from "axios";

const render = data => match =>
  data.pending
    ? match.pending()
    : data.error
    ? match.error(data.error)
    : data.data && match.data(data.data);

/**
 * React hook to simplify data fetching with a more declarative syntax
 *
 * @param String url The URL to run the query on
 * @returns Function to render data for component once Promise is settled
 *
 * @see {@link https://dev.to/joelnet/react-i-really-wish-this-is-how-i-could-write-components-1k4j|Dev.to}
 */
export const useFetch = url => {
  const [data, setData] = useState({ pending: true });

  useEffect(() => {
    axios
      .get(url)
      .then(data => setData({ resolved: data, pending: false }))
      .catch(error => setData({ rejected: error, pending: false }));
  }, [url]);

  return render(data);
};

export default useFetch;
