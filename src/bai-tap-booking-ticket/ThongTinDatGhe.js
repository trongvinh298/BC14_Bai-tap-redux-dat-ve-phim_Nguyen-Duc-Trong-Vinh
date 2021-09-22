import React, { Component } from "react";
import { connect } from "react-redux";
import { actHuyGhe } from "../redux/actions";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="mt-5">
        <button className="gheDuocChon"></button>{" "}
        <span className="text-light" style={{ fontSize: "25px" }}>
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon"></button>{" "}
        <span className="text-light" style={{ fontSize: "25px" }}>
          Ghế đang chọn
        </span>
        <br />
        <button style={{ marginLeft: "0" }} className="ghe"></button>{" "}
        <span className="text-light" style={{ fontSize: "25px" }}>
          Ghế chưa chọn
        </span>
        <div className="mt-5">
          <table className="table border-2 ">
            <thead>
              <tr className="text-light" style={{ fontSize: "30px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="text-light"
                    style={{ fontSize: "30px" }}
                  >
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                      <button
                        style={{ backgroundColor: "red" }}
                        onClick={() => {
                          this.props.dispatch(actHuyGhe(item.soGhe));
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning" style={{ fontSize: "30px" }}>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce(
                    (tongTien, item, index) => {
                      return (tongTien += item.gia);
                    },
                    0
                  )}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapBookingTicketReduer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps, null)(ThongTinDatGhe);
