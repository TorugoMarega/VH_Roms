const carouselNews = document.querySelector('.newsList')
const newsApiKey = "a7a175d2d501453fbda9910c63da0b57"
const newsUrl = `https://newsapi.org/v2/everything?q=games&language=pt&pageSize=5&sortBy=relevancy&apiKey=${newsApiKey}`
 


//---------------------------------------API US ENG CORS ALL---------------------------------------------------------
const options = {
  method: 'GET',
  url: 'https://free-news.p.rapidapi.com/v1/search',
  params: {q: 'game', lang:'pt'},
  headers: {
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
    'x-rapidapi-key': '3cb6939a69msh16fb0a3bd2fd58cp1cd6e4jsned267ebbc199'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    var data = response.data
    carouselNews.innerHTML = `
        <div class="carousel-item active">
            <img class="d-block w-100" src="${data.articles[0].media}" alt="">
                <div class="carousel-caption  d-md-block">
                    <a href="${data.articles[0].link}"><h5>${data.articles[0].title}</h5></a>
                    <p>${data.articles[0].summary}</p>
                </div>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src="${data.articles[2].media}" alt="">
        <div class="carousel-caption  d-md-block">
            <a href="${data.articles[2].link}">
                <h5>${data.articles[2].title}</h5>
            </a>
            <p>${data.articles[2].summary}</p>
        </div>
    </div>
    
    <div class="carousel-item">
        <img class="d-block w-100" src="${data.articles[8].media}" alt="">
        <div class="carousel-caption  d-md-block">
            <a href="${data.articles[8].link}">
                <h5>${data.articles[8].title}</h5>
            </a>
            <p>${data.articles[8].summary}</p>
        </div>
    </div>
     
    <div class="carousel-item">
        <img class="d-block w-100" src="${data.articles[3].media}" alt="">
        <div class="carousel-caption  d-md-block">
            <a href="${data.articles[3].link}">
                <h5>${data.articles[3].title}</h5>
            </a>
            <p>${data.articles[3].summary}</p>
        </div>
    </div>
    
    <div class="carousel-item">
        <img class="d-block w-100" src="${data.articles[6].media}" alt="">
        <div class="carousel-caption d-md-block">
            <a href="${data.articles[6].link}">
                <h5>${data.articles[6].title}</h5>
            </a>
            <p>${data.articles[6].summary}</p>
        </div>
    </div>            
    `
}).catch(function (error) {
	console.error(error);
});


//---------------------------------------API PT BR CORS LOCALHOST---------------------------------------------------------
/* function getNews(){
    axios.get(newsUrl)
    .then(response => {
        const data = response.data

        carouselNews.innerHTML = `
        <div class="carousel-item active">
            <img class="d-block w-100" src="${data.articles[0].urlToImage}" alt="">
                <div class="carousel-caption  d-md-block">
                    <a href="${data.articles[0].url}"><h5>${data.articles[0].title}</h5></a>
                    <p>${data.articles[0].description}</p>
                </div>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src="${data.articles[1].urlToImage}" alt="">
        <div class="carousel-caption  d-md-block">
            <a href="${data.articles[1].url}">
                <h5>${data.articles[1].title}</h5>
            </a>
            <p>${data.articles[1].description}</p>
        </div>
    </div>
    
    <div class="carousel-item">
        <img class="d-block w-100" src="${data.articles[2].urlToImage}" alt="">
        <div class="carousel-caption  d-md-block">
            <a href="${data.articles[2].url}">
                <h5>${data.articles[2].title}</h5>
            </a>
            <p>${data.articles[2].description}</p>
        </div>
    </div>
    
    <div class="carousel-item">
        <img class="d-block w-100" src="${data.articles[3].urlToImage}" alt="">
        <div class="carousel-caption  d-md-block">
            <a href="${data.articles[3].url}">
                <h5>${data.articles[3].title}</h5>
            </a>
            <p>${data.articles[3].description}</p>
        </div>
    </div>
    
    <div class="carousel-item">
        <img class="d-block w-100" src="${data.articles[4].urlToImage}" alt="">
        <div class="carousel-caption d-md-block">
            <a href="${data.articles[4].url}">
                <h5>${data.articles[4].title}</h5>
            </a>
            <p>${data.articles[4].description}</p>
        </div>
    </div>            
    `
    })
    .catch(error=>console.log(error))
}

getNews()
 */
/* function retrieve(e){

    const newsApiKey = "a7a175d2d501453fbda9910c63da0b57"
    let newsUrl = `https://newsapi.org/v2/everything?q=games&language=pt&pageSize=5&sortBy=relevancy&apiKey=${newsApiKey}`
    fetch(newsUrl).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement ('a');
            let img = document.createElement ('img');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            img.setAttribute('src', article.urlToImage)
            a.textContent = article.title;
            li.appendChild(a);
            li.appendChild(img)
            newsList.appendChild(li); 
        });
    })
} */

/* function retrieve(e){

    const newsApiKey = "a7a175d2d501453fbda9910c63da0b57"
    let newsUrl = `https://newsapi.org/v2/everything?q=games&language=pt&pageSize=5&sortBy=relevancy&apiKey=${newsApiKey}`
    
    fetch(newsUrl).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        console.log(data.articles[0].title)

        carouselNews.innerHTML = `
            <div class="carousel-item active">
                <img class="d-block w-100" src="${data.articles[0].urlToImage}" alt="">
                    <div class="carousel-caption d-none d-md-block">
                        <a href="${data.articles[0].url}"><h5>${data.articles[0].title}</h5></a>
                        <p>${data.articles[0].description}</p>
                    </div>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="${data.articles[1].urlToImage}" alt="">
            <div class="carousel-caption d-none d-md-block">
                <a href="${data.articles[1].url}">
                    <h5>${data.articles[1].title}</h5>
                </a>
                <p>${data.articles[1].description}</p>
            </div>
        </div>
        
        <div class="carousel-item">
            <img class="d-block w-100" src="${data.articles[2].urlToImage}" alt="">
            <div class="carousel-caption d-none d-md-block">
                <a href="${data.articles[2].url}">
                    <h5>${data.articles[2].title}</h5>
                </a>
                <p>${data.articles[2].description}</p>
            </div>
        </div>
        
        <div class="carousel-item">
            <img class="d-block w-100" src="${data.articles[3].urlToImage}" alt="">
            <div class="carousel-caption d-none d-md-block">
                <a href="${data.articles[3].url}">
                    <h5>${data.articles[3].title}</h5>
                </a>
                <p>${data.articles[3].description}</p>
            </div>
        </div>
        
        <div class="carousel-item">
            <img class="d-block w-100" src="${data.articles[4].urlToImage}" alt="">
            <div class="carousel-caption d-none d-md-block">
                <a href="${data.articles[4].url}">
                    <h5>${data.articles[4].title}</h5>
                </a>
                <p>${data.articles[4].description}</p>
            </div>
        </div>            
        `
    })
}
retrieve() */
