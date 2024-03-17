import React from 'react';
import lang from "../utils/languagesConstants";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from 'react'
import openai from "../utils/openAi";
import {API_OPTIONS} from "../constants/constants";
import {addGptMovieResult} from "../utils/gptSlice";


function GptSearchBar(props) {
    const language = useSelector(store => store.config)

    //  dispatching gpt movies in store
    const dispatch = useDispatch()


    // use ref for getting the text value
    const searchText = useRef(null)

  //   movie search in tmdb
    const searchMovieTMDB = async (movie) =>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
      const json = await data.json()

        return json.results
    }




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
     // console.log(gptResults.choices[0]?.message?.content)

    //   for each movie in gptMovies i will search in tmdb api

const promiseArray  = gptMovies.map((searchMovie)=>{
    // array of promises which are in pending state (5 network calls made)
    return searchMovieTMDB(searchMovie)
})

      // promise all for resolving all my promises in promises array
      const tmdbResults = await Promise.all(promiseArray)

  // console.log(tmdbResults)
      dispatch(addGptMovieResult({ movieNames:gptMovies,movieResults:tmdbResults }))
    };



    return (
        <div className="md:pt-[10%] pt-[50%] flex md:justify-center " onSubmit={(e)=>e.preventDefault()}>
            <form className=" w-full md:w-1/2  bg-black grid grid-cols-12">
                <input ref={searchText} className="col-span-9 p-4 m-4 " type="text" placeholder={lang[language.lang].gptSearchPlaceholder}/>

                <button className=" col-span-3 m-4 py-2 px-2 rounded-lg bg-red-600 text-white" onClick={handleGptSearchClick}>{lang[language.lang].search}</button>
            </form>
        </div>
    );
}

export default GptSearchBar;