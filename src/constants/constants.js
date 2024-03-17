
//  taken from movelist api of tmdb website
export const API_OPTIONS={
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

// this is for language constants
export const SUPPORTED_LANGUAGES = [
    {identifier: "en" , name: "English"},
    {identifier: "hindi" , name: "Hindi"},
    {identifier: "kannada" , name: "Kannada"},
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY