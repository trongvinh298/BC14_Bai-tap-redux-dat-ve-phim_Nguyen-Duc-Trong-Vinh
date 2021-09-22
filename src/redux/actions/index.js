import * as ActionType from "../constants";

const actDatGhe = (ghe) => {
  return { type: ActionType.DAT_GHE, ghe };
};

const actHuyGhe = (soGhe) => {
  return {
    type: ActionType.HUY_GHE,
    soGhe,
  };
};

export { actDatGhe, actHuyGhe };
