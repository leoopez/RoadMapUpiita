/** @format */

export const transformText = data => {
  if (data === "semester") return "Semestre";
  if (data === "level") return "Nivel";
  if (data === "credits") return "Creditos";
  if (data === "optional") return "Optativa";
  return data;
};
