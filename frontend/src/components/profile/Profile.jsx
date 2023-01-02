import React from "react";
import { Link } from "react-router-dom";
import me from "../../assets/favico.png";

const Profile = () => {
  const options = {};

  return (
    <section className="profile">
      <main>
        <img src={me} alt="User" {...options} />

        <h5 {...options}> Abutalib </h5>

        <div>
          <Link to="/admin/dashboard">Dashboard</Link>
        </div>

        <div>
          <Link to="/myorders">Orders</Link>
        </div>

        <button>Logout</button>
      </main>
    </section>
  );
};

export default Profile;
