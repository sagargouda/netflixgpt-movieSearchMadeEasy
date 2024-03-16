import React from 'react';
import lang from "../utils/languagesConstants";
import {useSelector} from "react-redux";
import {useRef} from 'react'
import openai from "../utils/openAi";

function GptSearchBar(props) {
    const language = useSelector(store => store.config)

    // use ref for getting the text value
    const searchText = useRef(null)
  async function handleGptSearchClick(){
    console.log(searchText.current.value)

      //  making gpt api's smarter
      const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example results given ahead. Example results: Gadar , Don , Sholay , Kgf , Empire"

    //     make an API call to GPT API and get movies results
            const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content:  gptQuery}],
                model: 'gpt-3.5-turbo',
            });
    if(!gptResults.choices){
        // error handling
    }
         // console.log(gptResults.choices[0]?.message?.content)

    const gptMovies = gptResults.choices[0]?.message?.content.split(',')
      // console.log(gptMovies)



    };



    return (
        <div className="pt-[10%] flex  justify-center " onSubmit={(e)=>e.preventDefault()}>
            <form className="w-1/2  bg-black grid grid-cols-12">
                <input ref={searchText} className="col-span-9 p-4 m-4 " type="text" placeholder={lang[language.lang].gptSearchPlaceholder}/>

                <button className=" col-span-3 m-4 py-2 px-4 rounded-lg bg-red-600 text-white" onClick={handleGptSearchClick}>{lang[language.lang].search}</button>
            </form>
        </div>
    );
}

export default GptSearchBar;