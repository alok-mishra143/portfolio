import Link from "next/link";
import React from "react";
interface Props {
  tittle: string;
  classname?: string;
}

const TittleButton = (props: Props) => {
  return (
    <div className={props.classname}>
      <div className="inline-block mx-auto w-46  group  transition-all">
        <div>
          <h1 className="text-3xl font-bold text-center group-hover:text-green-400">
            {props.tittle}
          </h1>

          <div className=" w-32 h-2 rounded-full bg-green-500"></div>
          <div className=" w-32 h-2 translate-x-2 rounded-full bg-indigo-500"></div>
        </div>
      </div>
    </div>
  );
};

export default TittleButton;
