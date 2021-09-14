/** @format */

export const changeCarrer = career => {
  return {
    type: "CHANGE_CAREER",
    payload: career,
  };
};

export const changeGroup = group => {
  return {
    type: "CHANGE_GROUP",
    payload: group,
  };
};

export const changeOrder = (down = true) => {
  return {
    type: "CHANGE_CAREER",
    payload: down,
  };
};
