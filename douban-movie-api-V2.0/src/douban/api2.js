
export function fetch(url) {
    return new Promise((resolve, reject)=> {
        $.ajax({
           type: "GET",
           url: url,
           async: false,
           dataType: "jsonp",
           success: function(msg){
                resolve(msg);
                console.log(msg);
           }
        })
    })
}

export function fetchItemByType(type) {
  return fetch(`${type}`);
}

export function fetchMoviesByType(type, start = 0, count = 21) {
  return fetchItemByType(`https://api.douban.com/v2/movie/${type}?start=${start}&count=${count}`)
}

export function fetchMovieById(id) {
  return fetch(`https://api.douban.com/v2/movie/subject/${id}`);
}

export function fetchSearchMovies(query, start = 0) {
  let url = encodeURI(`https://api.douban.com/v2/movie/search?q=${query}&start=${start}`);
  return fetch(url);
}
