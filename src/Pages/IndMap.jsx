import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const IndMap = () => {
  const [map, setMap] = useState();
  const params = useParams();
  const { mapId } = params;
  console.log(mapId);
  const url = `https://valorant-api.com/v1/maps/${mapId}`;

  const getMap = async () => {
    const response = await fetch(url);
    const body = await response.json();
    setMap({
      displayName: body.data.displayName,
      splash: body.data.splash,
      displayIcon: body.data.displayIcon,
      sites: body.data.tacticalDescription,
    });
    console.log(body.data);
  };

  useEffect(() => {
    getMap();
  }, []);

  if (!map) {
    return <h1 className="text-center">Ooops! Invalid map</h1>;
  }

  return (
    <div className="p-3 ">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="rounded-t-lg w-full h-44 md:w-[70%] md:h-[50vh] md:rounded-none md:rounded-l-lg"
          src={map.splash}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {map.displayName}
          </h5>
        </div>
        <div className="w-full flex items-center justify-center">
          <h5 className="p-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Sites:
          </h5>
          <p className="text-center">{map.sites}</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <h5 className="p-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Radar:
          </h5>
          <img
            className="rounded-full w-[15rem] border-4 border-slate-500 md:h-[20rem] md:w-[20rem]"
            src={map.displayIcon}
            alt=""
          />
        </div>
      </a>
    </div>
  );
};
