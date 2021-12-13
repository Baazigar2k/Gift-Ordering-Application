import React from "react";
import "./Profile.css";
import { useStateValue } from "./StateProvider";

function Profile() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="profile">
      <div className="profile__container">
        <img
          className="profile__backImg"
          src="https://wallpapercave.com/wp/wp7802992.jpg"
        />

        <div className="profile__box">
          <div className="inner_box">
            <div className="profile__image">
              <img
                className="inner__img"
                src={
                  user
                    ? user?.photoURL
                    : "https://cdn2.iconfinder.com/data/icons/avatar-profile/476/profile_avatar_contact_account_user_default-512.png"
                }
                alt="Profile Pic"
              />
            </div>
            <div className="profile__info">
              <div className="info__detail">
                <p className="info__type">Display Name</p>
                <p className="info__value">
                  {user ? user?.displayName : "Welcome Guest"}
                </p>
              </div>
              <div className="info__detail">
                <p className="info__type">Email ID</p>
                <p className="info__value">
                  {user ? user?.email : "dearguest@xyz.com"}
                </p>
              </div>
              <div className="info__detail">
                <p className="info__type">Acc Created on</p>
                <p className="info__value">
                  {user
                    ? user?.metadata.creationTime.toLocaleString()
                    : "00:00:00 Default Time"}
                </p>
              </div>
              <div className="info__detail">
                <p className="info__type">Last Signed In</p>
                <p className="info__value">
                  {user
                    ? user?.metadata.lastSignInTime.toLocaleString()
                    : "00:00:00 Default Time"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
