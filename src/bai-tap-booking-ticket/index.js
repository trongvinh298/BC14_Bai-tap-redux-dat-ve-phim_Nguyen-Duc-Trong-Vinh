import React, { Component } from "react";
import "../bai-tap-booking-ticket/style.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from "../data/danhSachGhe.json";

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className=""
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpeg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="container-fluid">
            <div className="row ">
              <div className="col-8 text-center">
                <div className="text-warning  display-4">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="text-light mt-2 " style={{ fontSize: "25px" }}>
                  Màn hình
                </div>{" "}
                <div
                  className="mt-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row  ",
                  }}
                >
                  <div className="screen"></div>
                </div>
                <div className="container chairs">{this.renderHangGhe()}</div>
              </div>
              <div className="col-4">
                <div
                  className="text-success display-4"
                  style={{ fontSize: "50px" }}
                >
                  DANH SÁCH VÉ ĐÃ CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
