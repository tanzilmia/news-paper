// load all categories 

const loadCataGories = () =>{
    let url = `https://openapi.programming-hero.com/api/news/categories`
        fetch(url)
        .then(res => res.json())
        .then(data => Navbar(data.data.news_category))
        // simple error handeling
        .catch(error => console.log(error))
}

const Navbar = (navitems) =>{
    const ul = document.getElementById('ulwrapping')
    navitems.forEach(item =>{
        // console.log(item.category_name)
        let li = document.createElement('li')
            li.classList.add('nav-item')
            li.innerHTML = `
            <a onclick="categoriyes('${item.category_id}')" class="nav-link active cetegories_name" aria-current="page" href="#">${item.category_name}</a>
            `
            ul.appendChild(li)
           
    })
    
   
}




// function btnClick(btn){
//     let players = btn.parentNode.children[0].innerText
//     let li = document.createElement('li')
//     Orderlist.appendChild(li)
//     let ListLength = Orderlist.children.length
//     if(ListLength >=6){
//         li.remove()
//         alert('you can select just 5 players')
//     }else{
//         li.innerText = players
//         btn.setAttribute('disabled', '');
//     }
// }
   

// catetories data load function 

const categoriyes = (cetagoriesId) =>{
    let url = `https://openapi.programming-hero.com/api/news/category/${cetagoriesId}`
        fetch(url)
        .then(res => res.json())
        .then(data => CetegoriesDetails(data.data))
        // simple error handeling
        .catch(error => console.log(error))
}

let Name = document.getElementsByClassName('cetegories_name')


const CetegoriesDetails = (newsCards) =>{
    loading(true)
    
    let totalNewsItem = newsCards.length
    let Itemshowing = document.getElementById('item_showing')
        Itemshowing.innerHTML = ' '
        let h4 = document.createElement('h4')
        h4.innerText = ` ${totalNewsItem} items found for category Entertainment`
        Itemshowing.appendChild(h4)
    let parentDiv = document.getElementById('cardParents')
    
        parentDiv.innerHTML = ' '

        console.log(newsCards)

    newsCards.forEach(news =>{
        // console.log(news)

        let div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
            <div class="card h-100">
            <img src="${news.thumbnail_url}" class="card-img-top card_img" alt="...">
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
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
            <button class="btn btn-primary">See More</button>
            </div>
            
          </div>
            `
        parentDiv.appendChild(div)
    })
    
    loading(false)
}

// spinner loading 

    let loading = (isLoading) =>{
        let spinnner = document.getElementById('customSpinner')
        if(isLoading){
            spinnner.classList.remove('d-none')
        }else{
            spinnner.classList.add('d-none')
        }
    }

loadCataGories()



// 
// "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
// "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",





































































