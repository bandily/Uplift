import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../Styling/ProfilePage.css'

function ProfilePage({ currentUser }) {
  const history = useNavigate();
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div>
      {currentUser && (
        <>
          {currentUser.avatar !== null ? (
            <div className="avatar-container">
              <img
                className="avatar"
                src={currentUser.avatar.image}
                alt="avatar"
              />
            </div>
          ) : null}

          <button
            className="edit-avatar-button"
            alt="avatar-edit"
            onMouseOver={() => setShowEdit(true)}
            onMouseLeave={() => setShowEdit(false)}
            onClick={() => history("/avatar")}
          >
            {showEdit ? (
              <span
                style={{ fontSize: "15px", position: "relative", top: "-3px" }}
              >
                Edit
              </span>
            ) : (
              <span>test</span>
            )}
          </button>
          <h1 className="profile-username">{currentUser.username}</h1>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
