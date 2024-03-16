
//  taken from movelist api of tmdb website
export const API_OPTIONS={
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGE2NWYzYzM1MDAyNjQ2MDNmMDhkNzlhNzYyNTkzYyIsInN1YiI6IjY1YjNhMDM5MGVkMmFiMDE0OTg2MjMyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-vbgLbc_CVRyobzB8N7wH8IJwHiQbWTUkOqjNP4b7uk'
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

// this is for language constants
export const SUPPORTED_LANGUAGES = [
    {identifier: "en" , name: "English"},
    {identifier: "hindi" , name: "Hindi"},
    {identifier: "kannada" , name: "Kannada"},
]

export const OPENAI_KEY = "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"