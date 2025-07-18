import { FIN_DATA_API } from "../app/constants.js";
import getFinDataOptions from "./options.js";

const getSegmentedRevenues = async (
  ticker: string,
  period: string,
  limit: number
) => {
  const url = `${FIN_DATA_API}/financials/segmented-revenues?ticker=${ticker}&period=${period}&limit=${limit}`;
  const response = await fetch(url, getFinDataOptions());
  return await response.json();
};

export default getSegmentedRevenues;
