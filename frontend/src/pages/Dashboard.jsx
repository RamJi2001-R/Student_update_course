import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const [course, setCourse] = useState("");
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: ""
  });
  const [courseMessage, setCourseMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [courseLoading, setCourseLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const updateCourse = async () => {
    if (!course.trim()) {
      setCourseMessage("Please enter a course name");
      return;
    }
    setCourseLoading(true);
    try {
      await API.put("/update-course", { course });
      setCourseMessage("✓ Course updated successfully!");
      setCourse("");
      setTimeout(() => setCourseMessage(""), 3000);
    } catch (err) {
      setCourseMessage(err.response?.data?.message || "Failed to update course");
    } finally {
      setCourseLoading(false);
    }
  };

  const updatePassword = async () => {
    if (!passwords.oldPassword || !passwords.newPassword) {
      setPasswordMessage("Please fill in all fields");
      return;
    }
    setPasswordLoading(true);
    try {
      await API.put("/update-password", passwords);
      setPasswordMessage("✓ Password updated successfully!");
      setPasswords({ oldPassword: "", newPassword: "" });
      setTimeout(() => setPasswordMessage(""), 3000);
    } catch (err) {
      setPasswordMessage(err.response?.data?.message || "Failed to update password");
    } finally {
      setPasswordLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Welcome, {user?.name}! 👋</h1>
          <p>Manage your student profile and settings</p>
        </div>
        <button onClick={logout} className="btn-logout-header">Sign Out</button>
      </div>

      <div className="dashboard-grid">
        {/* Profile Card */}
        <div className="card profile-card">
          <div className="card-header">
            <h2>📋 Your Profile</h2>
          </div>
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Name</span>
              <span className="info-value">{user?.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Current Course</span>
              <span className="info-value">{user?.course || "Not set"}</span>
            </div>
          </div>
        </div>

        {/* Update Course Card */}
        <div className="card action-card">
          <div className="card-header">
            <h2>🎓 Update Course</h2>
          </div>
          <div className="card-body">
            <input
              type="text"
              placeholder="Enter new course name"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="input-field"
            />
            <button
              onClick={updateCourse}
              disabled={courseLoading}
              className="btn-update"
            >
              {courseLoading ? "Updating..." : "Update Course"}
            </button>
            {courseMessage && (
              <div
                className={`message ${courseMessage.startsWith("✓") ? "success" : "error"}`}
              >
                {courseMessage}
              </div>
            )}
          </div>
        </div>

        {/* Update Password Card */}
        <div className="card action-card">
          <div className="card-header">
            <h2>🔒 Update Password</h2>
          </div>
          <div className="card-body">
            <input
              type="password"
              placeholder="Current password"
              value={passwords.oldPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, oldPassword: e.target.value })
              }
              className="input-field"
            />
            <input
              type="password"
              placeholder="New password"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
              className="input-field"
            />
            <button
              onClick={updatePassword}
              disabled={passwordLoading}
              className="btn-update"
            >
              {passwordLoading ? "Updating..." : "Update Password"}
            </button>
            {passwordMessage && (
              <div
                className={`message ${passwordMessage.startsWith("✓") ? "success" : "error"}`}
              >
                {passwordMessage}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="dashboard-footer">
        <button onClick={logout} className="logout-btn">Sign Out</button>
      </div>
    </div>
  );
}

export default Dashboard;