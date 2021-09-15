/** @format */

export const CAREERS = ["Mecatronica", "Telematica", "Bionica"];
export const GROUP_BY = ["semester", "level"];
export const ORDER_BY = ["M-m", "m-M"];

export const URL_FETCH_DATA = data => `http://localhost:3001/${data}`;

export const transformText = data => {
  if (data === "semester") return "Semestre";
  if (data === "level") return "Nivel";
  if (data === "credits") return "Creditos";
};