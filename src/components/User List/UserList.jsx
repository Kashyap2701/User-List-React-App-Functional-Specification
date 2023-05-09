/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import User from "../User/User";
import style from "./UserList.module.css";
import dummyUsers from "../../data/dummyUser";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../store/UserSlice";
import ReactPaginate from "react-paginate";
import { ArrowLeft } from "react-feather";
import { ArrowRight } from "react-feather";
import { ThreeDots } from "react-loader-spinner";

function UserList() {
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const [isfirstLoad, setIsFirstLoad] = useState(false);

  useEffect(() => {
    dispatch(fetchUserData(currentPage));
    setIsFirstLoad(true);
  }, [currentPage]);

  const pageChangeHandler = (data) => {
    console.log(data.selected);
    setCurrentPage(data.selected);
  };

  return (
    <div className={style["user-list-wrapper"]}>
      {status == "pending" || users.length == 0 ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="rgb(246, 152, 30)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          visible={true}
        />
      ) : (
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Name</th>
                  <th>Status</th>
                  <th>Access</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return <User key={user._id} user={user} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isfirstLoad && (
        <ReactPaginate
          previousLabel={<ArrowLeft />}
          nextLabel={<ArrowRight />}
          className={style.pagination}
          pageClassName={style.page}
          previousClassName={style.indicators}
          nextClassName={style.indicators}
          activeClassName={style.activepage}
          pageCount={31}
          pageRangeDisplayed={0}
          marginPagesDisplayed={2}
          initialPage={currentPage}
          onPageChange={pageChangeHandler}
          disableInitialCallback
        />
      )}
    </div>
  );
}

export default UserList;
