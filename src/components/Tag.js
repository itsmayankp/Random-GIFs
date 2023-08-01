import react, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag(){

    const [tag, setTag] = useState("");

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    function randNumber(){

        let num = Math.floor(50*(Math.random()));
    }


    async function fetchData(){
        setLoading(true);

        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url);
        console.log(data);
        let randNum = await randNumber();
        const imageSource = data.data.images.downsized.url;
        console.log(imageSource)
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    function clickHandler(){

        return fetchData();
    }

    function changeHandler(event){

        return setTag(event.target.value);

    }




    return (
        <div className="w-[680px] flex flex-col items-center bg-[#550C18] gap-y-5 rounded-3xl border border-black mt-10">
            <h3 className="text-3xl underline uppercase font-bold mt-4 text-[#BEEE62]">Random {tag} GIF</h3>


        {
            loading ? (<div className="w-[250px] h-[250px] flex justify-center items-center"><Spinner/></div>) : (
                <div>
                    <img src={gif} width="450"></img>
                </div>
            )
        }

        <input
        onChange={changeHandler}
        value={tag}
        placeholder="Search Your GIF here..."
        className="w-9/12 rounded-lg text-xl uppercase pt-2 pb-2 font-semiboldcursor-text"
        />

            <button onClick={clickHandler}
            className="w-9/12 bg-[#6B9080] rounded-lg text-xl uppercase pt-2 pb-2 cursor-pointer font-semibold mb-5">
                Generate
            </button>
        </div>
    );




}


export default Tag;