import React from "react";

export const ImgWeaponCard = ({ displayName, displayIcon }) => {
  return (
    <div className="p-3">
      <a
        href="#"
        className="p-3  flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={displayIcon}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {displayName}
          </h5>
        </div>
      </a>
    </div>
  );
};
