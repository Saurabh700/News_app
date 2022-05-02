// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();

let url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"

// let url = "https://fakestoreapi.com/products/category/jewelery"

let container = document.getElementById("results")

import { getData,append } from "../components/fetch.js";

getData(url).then((res)=>{
    append(res,container)
})