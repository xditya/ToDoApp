import { confirmAlert } from "react-confirm-alert";
import "./topBar.css";

function TopBar() {
  const showConfirmation = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to logout?</p>
            <button
              onClick={() => {
                handleLogoutClick();
                onClose();
              }}
            >
              Yes.
            </button>
            <br />
            <button onClick={onClose}>No</button>
          </div>
        );
      },
    });
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="top-bar">
      <div className="logo">ToDo App</div>
      <div>
        <button onClick={showConfirmation}>Logout</button>
      </div>
    </div>
  );
}

export default TopBar;
