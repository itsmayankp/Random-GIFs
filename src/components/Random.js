import react, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random(){

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    function randNumber(){

        let num = Math.floor(50*(Math.random()));
    }


    async function fetchData(){
        setLoading(true);

    
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const {data} = await axios.get(url);
        console.log(data);
        let randNum = await randNumber();
        const imageSource = data.data.images.downsized.url;
        console.log(imageSource)
        setGif(imageSource);
        setLoading(false);
    }

    
    // We can also Do this...WITHOUT AXIOS
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const res = await fetch(url);
    //     const {data} = await res.json();
    //     // console.log(data);
    //     const imageSource = data.images.downsized_large.url;
    //     // console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);

    //     // Or we can also do
    //     // const output = await axios.get(url);
    //     // Also we have to import Axios
    // }

    useEffect(() =>{
        fetchData();
    }, [])

    useEffect(() => {
        fetchData();
    }, [])

    function clickHandler(){

        return fetchData();



    }

    return (
        <div className="w-[680px] flex flex-col items-center bg-[#2B303A] gap-y-5 rounded-3xl border border-black">
            <h3 className="text-3xl underline uppercase font-bold mt-4 text-[#BEEE62]">A Random GIF</h3>


        {
            loading ? (<div className="w-[250px] h-[250px] flex justify-center items-center"><Spinner/></div>) : (
                <div>
                    <img src={gif} width="450"></img>
                </div>
            )
        }

            <button onClick={clickHandler}
            className="w-9/12 bg-[#6B9080] rounded-lg text-xl uppercase pt-2 pb-2 cursor-pointer font-semibold mb-5">
                Generate
            </button>
        </div>
    );




}


export default Random;
