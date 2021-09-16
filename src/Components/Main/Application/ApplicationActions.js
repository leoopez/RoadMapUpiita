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

export const changeOrder = () => {
  return {
    type: "CHANGE_ORDER",
  };
};
