let getData = async (url) => {
    let res = await fetch(url)
    let data = await res.json()
    return data.articles
}

let append = (data,container) => {
    data.forEach((el)=>{
        let box = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.urlToImage;
        let headline = document.createElement("h4")
        headline.innerText = el.title;
        let para = document.createElement("p")
        para.innerText = el.description
        let left = document.createElement("div")
        let right = document.createElement("div")
        right.style.padding = "10px"
        left.append(img)
        right.append(headline,para)
        box.append(left,right)
        box.style.height = "170px"
        img.style.height = "100%"
        img.style.width = "250px"
        box.style.display = "flex"
        left.style.flex = "2"
        right.style.flex = "8"
        box.style.margin = "15px"
        box.style.border = "1px solid blue"
        container.append(box)
    })
}

export {getData,append}