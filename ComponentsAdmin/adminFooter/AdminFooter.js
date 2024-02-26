import React from "react";
import style from "./adminFooter.module.scss";

const AdminFooter = () => {
  return (
    <div
      className={
        style.footer +
        " container-fluid bg-light border border-top m-0 p-0 my-auto"
      }
    >
      <div
        className={
          style.footerInner +
          "  d-flex justify-content-center mx-auto m-0 p-0  "
        }
      >
        <div
          className={style.footerItem + "   row col-10 d-flex mx-auto mt-2 "}
        >
          <div className={" row col-12  mx-auto py-2"}>
            <div
              className={
                style.copyright +
                " row col-12 mx-auto d-flex justify-content-center mt-3"
              }
            >

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminFooter;
