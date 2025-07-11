import { FIN_DATA_API } from "../app/constants.js";
import getFinDataOptions from "./options.js";

const getFinancialStatements = async (
  ticker: string,
  period: string,
  limit: number
) => {
  const url = `${FIN_DATA_API}/financials/income-statements?ticker=${ticker}&period=${period}&limit=${limit}`;
  const response = await fetch(url, getFinDataOptions());
  return await response.json();
};

export default getFinancialStatements;
