import React from "react";

const EditFlight = () => {
  return (
    <>
      <div className="container grid mx-auto border rounded-xl p-20">
          <input type='number' placeholder="ID Airlines" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' placeholder="Origin" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' placeholder="Destination" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' placeholder="Departure" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' placeholder="Arrived" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' placeholder="Price" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='text' placeholder="class" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
          <input type='file' placeholder="Phoro" className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold" />
      </div>
    </>
  );
};

export default EditFlight;
