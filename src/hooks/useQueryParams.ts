import { useLocation } from "react-router-dom";

/**
 * Get query params from the current URL.
 */
export const useQueryParams = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
