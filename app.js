// load all categories 

const loadCataGories = () =>{
    let url = `https://openapi.programming-hero.com/api/news/categories`
        fetch(url)
        .then(res => res.json())
        .then(data => Navbar(data.data.news_category))
}

const Navbar = (navitems) =>{
    const ul = document.getElementById('ulwrapping')
    navitems.forEach(item =>{
        // console.log(item.category_name)
        let li = document.createElement('li')
            li.classList.add('nav-item')
            li.innerHTML = `
            <a onclick="categoriyes('${item.category_id}')" class="nav-link active" aria-current="page" href="#">${item.category_name}</a>
            `
            ul.appendChild(li)
    })
}

// catetories data load function 

const categoriyes = (cetagoriesId) =>{
    let url = `https://openapi.programming-hero.com/api/news/category/${cetagoriesId}`
        fetch(url)
        .then(res => res.json())
        .then(data => CetegoriesDetails(data.data))
}

const CetegoriesDetails = (newsCards) =>{
    let parentDiv = document.getElementById('cardParents')
    
        parentDiv.innerHTML = ' '
    newsCards.forEach(news =>{
        // console.log(news)

        let div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
            <div class="card h-100">
            <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${news.title.slice(0,40)} ...</h5>
              <p class="card-text">${news.details.slice(0,150)} ...</p>
              <div class="author_info">
                <div class="author">
                <img src="${news.author.img}" alt="" class ="author_img">
                <p>
                <span>${news.author.name}</span>
                <br>
                <span>${news.author.published_date}</span>
                </p>
                
                </div>
            </div>
            <button class="btn btn-primary">See More</button>
            </div>
            
          </div>
            `
        parentDiv.appendChild(div)
    })
}

loadCataGories()



// 
// "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
// "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",





































































