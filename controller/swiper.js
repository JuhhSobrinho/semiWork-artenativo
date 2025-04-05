import { carregarBancoDeDados } from '../model/model.js';

const swiperCarrousel = document.getElementById('swiper-games');

let gameCardHtml = '';

carregarBancoDeDados().then(bd => {
    console.log(bd);

    bd.forEach(element => {
        console.log(element.id);
        gameCardHtml += `
            <div class="swiper-slide">
                <p class="description-game">${element.description}</p>
                <div class="game-card">
                    <iframe
                        class="video-destaque"
                        src="${element.linkYoutube}"
                        title="${element.name} Trailer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    <div class="card-link">
                        <h2 class="titulo-game">${element.name}</h2>
                        <a class="btn" href="${element.linkSteam}" target="_blank"> ${element.name} Jogo Steam Page</a>
                        <a class="btn" href="${element.linkKit}" target="_blank"> ${element.name} Jogo Press Kit</a>
                    </div>
                </div>
            </div>
        `;
    });

    swiperCarrousel.innerHTML = gameCardHtml;


    var swiper = new Swiper(".mySwiper", {
        loop: bd.length >= 2,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

});
