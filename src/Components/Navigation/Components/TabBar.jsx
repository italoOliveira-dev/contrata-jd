import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    to: "/dashboard",
    iconPath: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 13H11V3H3v10zM3 21h8v-6H3v6zm10 0h8v-8h-8v8zm0-18v6h8V3h-8z"
        />
      </svg>
    ),
    label: "Dashboard",
  },
  {
    to: "/recrutamento",
    iconPath: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 8c0 .795 0 1.58.189 2.342.189.761.545 1.486 1.128 2.128.583.643 1.387 1.188 2.342 1.622M19 8V5c0-1.105-.895-2-2-2H7c-1.105 0-2 .895-2 2v11c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2v-3"
        />
      </svg>
    ),
    label: "Recrutamento",
  },
  {
    to: "/agendamento",
    iconPath: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.2222 4.8H16.4444V3H14.6667V4.8H9.33333V3H7.55556V4.8H5.77778C4.79733 4.8 4 5.6073 4 6.6V19.2C4 20.1927 4.79733 21 5.77778 21H18.2222C19.2027 21 20 20.1927 20 19.2V6.6C20 5.6073 19.2027 4.8 18.2222 4.8ZM17.3333 18.3H12V12.9H17.3333V18.3ZM18.2222 9.3H5.77778V7.5H18.2222V9.3Z"
        />
      </svg>
    ),
    label: "Agendamento",
  },
];

function TabBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-gray-100 ">
      <div className="max-w-screen-lg mx-auto ">
        <nav className="flex items-center justify-between py-4 px-6 md:px-0">
          <div>
            <img
              className="h-8"
              src="/path/to/your/logo.svg"
              alt="Company Logo"
            />
          </div>
          {/* Desktop */}
          <div className="hidden md:flex space-x-4 text-gray-900">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <span className="mr-2">{item.iconPath}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          {/* Tablet and Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-white shadow ">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TabBar;
