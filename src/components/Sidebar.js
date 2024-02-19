import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <button>Dashboard</button>
          </li>
          <li>
            <button>Inventory</button>
          </li>
          <li>
            <button>Orders</button>
          </li>
          <li>
            <button>Shipping</button>
          </li>
          <li>
            <button>Channel</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
