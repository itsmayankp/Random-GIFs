import React from "react";
import ReactDOM from "react-dom/client";
import Random from "./components/Random";
import Tag from "./components/Tag";



function App(){

    return (
        <div className="w-screen h-[100%] flex flex-col  items-center background relative">
            <h1 className="bg-[#484D6D] rounded-full text-center mt-[40px] w-11/12 pt-4 pb-4 mr-4 text-3xl font-bold ">RANDOM GIFS</h1>
            <div className="flex flex-col w-full items-center mt-10">
            {/* Random Gif generator */}
                <div className="">
                    <Random/>
                </div>

            {/* Search GIF */}
                <div>
                    <Tag/>
                </div>
            </div>
        </div>
    );


}

export default App;