console.log('linked to index.js');


const cardgroup1= $('.group1');
const cardgroup2= $('.group2');
const cardgroup3= $('.group3');



const apiUrl = 'https://api.github.com/users/t-starkw/repos'


const response = fetch(apiUrl, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}).then(response => response.json())
    .then(data => {
        console.log(data);

        let cardcount = 0;

        // let oldSlide = document.createElement('div');
        // oldSlide.classList.add('slide');
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].stargazers_count != 0) {
                let card = "<div class='card'><div class='card-body'><h5 class='card-title'>" + data[i].name + "</h5><p class='card-text'>" + data[i].description + "</p><a class='btn btn-dark' href=" + data[i].html_url + ">GitHub Repo</a></div></div>";
                
                if (cardcount < 3) {
                    cardgroup1.append(card);
                    cardcount ++
                } else if (cardcount < 6) {
                    cardgroup2.append(card);
                    cardcount ++
                } else if (cardcount < 10) {
                    cardgroup3.append(card);
                    cardcount ++
                }
            }
            
        }

    })



