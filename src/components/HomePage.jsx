import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  function handleSignOut(event) {
    setUser({});
  }

  return (
    <div>
      {user.picture && <img src={user.picture} alt={user.name} />}
      {user.name && <h3>{user.name}</h3>}

      <Link to="/" onClick={(e) => handleSignOut(e)}>
        Sign Out
      </Link>
    </div>
  );
}

export default HomePage;
