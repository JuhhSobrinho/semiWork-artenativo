import "./scroll.js";
import "./swiper.js";


const cardHtml = document.getElementById('card-new-html');
const destaqueHtml = document.getElementById('destaque-html');

fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=UCPVYjnkZ111N8_t6WakYb3w"))
    .then(response => response.json())
    .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data.contents, "text/xml");
        let items = Array.from(xml.querySelectorAll("entry")).slice(0, 4);

        let aux = 0;
        let cardNewHtml = '';
        let destaqueNewHtml = '';

        items.forEach(item => {
            let title = item.querySelector("title").textContent;
            let videoUrl = item.querySelector("link").getAttribute("href");
            let videoId = new URL(videoUrl).searchParams.get("v");
            let embedUrl = `https://www.youtube.com/embed/${videoId}`;
            aux += 1;

            if (aux === 1) {
                destaqueNewHtml += `
                    <iframe
                        class="video-destaque"
                        style="border-radius: 10px; overflow: hidden;"
                        src="${embedUrl}"
                        title="${title}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>`;
            } else {
                cardNewHtml += `
                    <div class="card" id="card${aux}">
                        <div class="dados-canal">
                            <h3 class="text-card">${title}</h3>
                            <span class="text-card">@semiwork</span>
                        </div>
                        <iframe
                            class="video-card"
                            style="border-radius: 5px; overflow: hidden;"
                            src="${embedUrl}"
                            title="${title}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>`;
            }
        });

        cardHtml.innerHTML = cardNewHtml;
        destaqueHtml.innerHTML = destaqueNewHtml;


        document.querySelectorAll('.card').forEach((cardItem) => {
            cardItem.addEventListener('click', () => {
                const idCardItem = cardItem.id;
                console.log('Card clicado:', idCardItem);
        
                const cardElement = document.getElementById(idCardItem);
        
                // Fecha todos os outros cards antes de abrir o clicado
                document.querySelectorAll('.card').forEach((card) => {
                    if (card.id !== idCardItem) {
                        card.classList.remove('card-clicado'); // Remove "ativo" dos outros
                        card.classList.add('card-desligado'); // Garante que fiquem desligados
                    }
                });
        
                // Alterna o estado do card clicado
                if (cardElement.classList.contains('card-clicado')) {
                    cardElement.classList.remove('card-clicado');
                    cardElement.classList.add('card-desligado'); // Se já estava aberto, fecha
                } else {
                    cardElement.classList.add('card-clicado');
                    cardElement.classList.remove('card-desligado'); // Se estava fechado, abre
                }
        
                // Atualiza os iframes apenas do card clicado
                cardElement.querySelectorAll('iframe').forEach(iframe => { 
                    iframe.style.width = '100%'; 
                    iframe.style.height = '100%'; 
                    iframe.style.borderRadius = '10px'; 
                });
            });
        });
        



    })
    .catch(error => console.error("Erro ao buscar vídeos:", error));


    import "./contact.js";