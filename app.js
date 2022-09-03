// load all categories 
const loadCataGories = () =>{
    let url = `https://openapi.programming-hero.com/api/news/categories`
        fetch(url)
        .then(res => res.json())
        .then(data => Navbar(data.data.news_category))
        // simple error handeling
        .catch(error => console.log(error))
}

// shwo default data on ui
const dafaultCatagorie = () =>{
    let url = `https://openapi.programming-hero.com/api/news/category/01`
        fetch(url)
        .then(res => res.json())
        .then(data => CetegoriesDetails(data.data))
        // simple error handeling
        .catch(error => console.log(error))
}
// call default Categories
dafaultCatagorie()

// set dynamic nav items on navbar 
const Navbar = (navitems) =>{
    const ul = document.getElementById('ulwrapping')
    navitems.forEach(item =>{
        let li = document.createElement('li')
            li.classList.add('nav-item')
            li.innerHTML = `
            <a onclick="categoriyes('${item.category_id}')"  class="nav-link active" aria-current="page" href="#">${item.category_name}</a>
            `
            ul.appendChild(li) 
    })
    
}

// all cetegories  functionality 
const categoriyes = (cetagoriesId) =>{
    let url = `https://openapi.programming-hero.com/api/news/category/${cetagoriesId}`
        fetch(url)
        .then(res => res.json())
        .then(data => CetegoriesDetails(data.data))
        // simple error handeling
        .catch(error => console.log(error))
}
// categories details 
const CetegoriesDetails = (newsCards) =>{
    loading(true)
    let totalNewsItem = newsCards.length
    let Itemshowing = document.getElementById('item_showing')
        Itemshowing.innerHTML = ' '
        let h4 = document.createElement('h4')
        h4.innerText = ` ${totalNewsItem} items found for This Categorys`
        Itemshowing.appendChild(h4)
    let parentDiv = document.getElementById('cardParents')
        parentDiv.innerHTML = ' '
        // sorting the arry by total number
    let NewsShorting =  newsCards.sort(function(a,b){
            return b.total_view - a.total_view
    })
    NewsShorting.forEach(news =>{
        let div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
            <div class="card h-100">
            <img src="${news.image_url}" class="card-img-top card_img" alt="...">
            <div class="card-body">
              <h5 class="card-title text-muted">${news.title}</h5>
              <p class="card-text">${news.details.slice(0,150)} ...</p>
              <div class="author_info">
                <div class="author">
                <img src="${news.author.img}" alt="" class ="author_img">
                <p>
                <span>${news.author.name ? news.author.name : "No data"}</span>
                <br>
                <span>${news.author.published_date ? news.author.published_date : "No Data"}</span>
                </p>
                </div>
                <li><i class="fa fa-eye text-success" aria-hidden="true"></i> <span>${news.total_view ? news.total_view : "No Data"}</span></li>
            </div>
            <button  onclick="DetailsInfo('${news._id}')"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">See More</button>
            </div>
            
          </div>
            `
        parentDiv.appendChild(div)
    })
    
    loading(false)
}
// details info 
const DetailsInfo = (NewsId) =>{
    let url = `https://openapi.programming-hero.com/api/news/${NewsId}`
        fetch(url)
        .then(res => res.json())
        .then(data => DetailsInfoInModal(data.data[0]))
        .catch(error => console.log(error))
}

const DetailsInfoInModal = (cardInfo) =>{
let modalBody = document.getElementById('modal_info')
    modalBody.innerHTML = `
    <img src="${cardInfo.thumbnail_url}" alt="">
    <h4>${cardInfo.title}</h4>
    <p>${cardInfo.details}</p>
    <p>Author : ${cardInfo.author.name ? cardInfo.author.name : "No data"}</p>
    <p>Publish Date : ${cardInfo.author.published_date ? cardInfo.author.published_date : "No Data"}</p>
    `
}
// spinner loading 
const loading = (isLoading) =>{
        let spinnner = document.getElementById('customSpinner')
        if(isLoading){
            spinnner.classList.remove('d-none')
        }else{
            spinnner.classList.add('d-none')
        }
    }

loadCataGories()

































































