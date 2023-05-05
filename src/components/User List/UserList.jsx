/* eslint-disable no-unused-vars */
import React from "react";
import User from "../User/User";
import style from "./UserList.module.css";
import dummyUsers from "../../data/dummyUser";
import ReactPaginate from "react-paginate";
import { ArrowLeft } from "react-feather";
import { ArrowRight } from "react-feather";

function UserList() {
  const pageChangeHandler = (data) => {
    console.log(data);
  };

  return (
    <div className={style["user-list-wrapper"]}>
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
            {dummyUsers.map((user) => {
              return <User key={user.id} user={user} />;
            })}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        className={style.pagination}
        pageClassName={style.page}
        previousClassName={style.indicators}
        nextClassName={style.indicators}
        activeClassName={style.activepage}
        pageCount={2}
        initialPage={0}
        onPageChange={pageChangeHandler}
      />
    </div>
  );
}

export default UserList;
