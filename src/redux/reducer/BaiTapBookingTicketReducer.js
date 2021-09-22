import { DAT_GHE, HUY_GHE } from "../constants";

const initialState = {
  danhSachGheDangDat: [],
};

const BaiTapBookingTicketReduer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_GHE:
      let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatCapNhat.findIndex(
        (item) => item.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatCapNhat.splice(index, 1);
      } else {
        danhSachGheDangDatCapNhat.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatCapNhat;
      return { ...state };

    case HUY_GHE:
      let danhSachGheDangDatCapNhat1 = [...state.danhSachGheDangDat];
      let index1 = danhSachGheDangDatCapNhat1.findIndex(
        (item) => item.soGhe === action.soGhe
      );
      if (index1 !== -1) {
        danhSachGheDangDatCapNhat1.splice(index1, 1);
      }

      state.danhSachGheDangDat = danhSachGheDangDatCapNhat1;
      return { ...state };

    default:
      return { ...state };
  }
};

export default BaiTapBookingTicketReduer;
