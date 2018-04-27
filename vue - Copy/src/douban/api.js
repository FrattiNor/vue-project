/**
 * Created by superman on 2016/12/2.
 */
import axios from 'axios';

export function fetch(url) {
  return new Promise((resolve, reject)=> {
    axios.get(url)
        .then(response => {
          resolve(response.data);
        })
  })
}

export function fetchItemByType(type) {
  return fetch(`${type}`);
}

export function fetchMoviesByType(type, start = 0, count = 21) {
  return fetchItemByType(`api/movie/${type}?start=${start}&count=${count}`)
}

export function fetchMovieById(id) {
  return fetch(`api/movie/subject/${id}`);
}

export function fetchSearchMovies(query, start = 0) {
  let url = encodeURI(`api/movie/search?q=${query}&start=${start}`);
  return fetch(url);
}
