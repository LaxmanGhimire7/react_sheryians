import React from "react";

const Card = (props) => {
  return (

            <div key={props.idx} className="bg-black w-96 rounded mt-7">
              <div className="flex flex-col text-white p-5 justify-center items-center">
                <img
                  className="h-28 w-28 rounded-full object-cover object-center "
                  src={props.elem.image}
                  alt=""
                />

                <h1 className=" mt-2 font-bold">{props.elem.userName}</h1>
                <p className=" mt-2 uppercase"> {props.elem.userEmail}</p>
                <h2 className=" mt-2 italic font-light text-red-600">
                  {props.elem.userRole}
                </h2>
                <p className="text-center mt-2 text-sm italic">
                  {props.elem.userDescription}
                </p>
                <button
                  onClick={() => {
                    props.handleDelete(props.idx);
                  }}
                  className="mt-2 w-full bg-red-600 py-2.5 rounded active:scale-95 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          );
};

export default Card;