import React from "react";

interface Props {
  title?: string;
}

const Breadcrumb = ({ title }: Props) => {
  return (
    <div>
      <nav className="flex mt-1">
        <ol className="flex flex-wrap text-sm">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="flex font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-gray-400 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <a
                href="/collections"
                className="flex font-medium text-gray-700 hover:text-gray-900"
              >
                Collections
              </a>
            </div>
          </li>
          {title ? (
            <li>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="/collections"
                  className="flex font-medium text-gray-700 hover:text-gray-900"
                >
                 {title}
                </a>
              </div>
            </li>
          ) : (
            <span></span>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
