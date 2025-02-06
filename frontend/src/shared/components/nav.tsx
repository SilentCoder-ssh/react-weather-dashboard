export default function Nav() {
  return (
    <nav className="bg-gray-800 fixed h-full top-0 left-0 w-12 flex justify-center py-4 shadow-lg z-40">
      <div className="flex flex-col items-center justify-center space-y-12 h-full">
        <a
          id="current-conditions-nav"
          className="cursor-pointer text-white hover:text-gray-200 flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span className="text-2 mt-1">Actuelles</span>
        </a>
        <a
          id="hourly-forecast-nav"
          className="cursor-pointer text-white hover:text-gray-200 flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-2 mt-1">Horaires</span>
        </a>

        <a
          id="tomorrow-forecast-nav"
          className="cursor-pointer text-white hover:text-gray-200 flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <span className="text-2 mt-1">Demain</span>
        </a>
      </div>
    </nav>
  );
}
