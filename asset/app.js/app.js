/*
1. Creare uno slider di immagini: potete usare le immagini che desiderate.
2. Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
3.Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera (usate un event listener su document e ascoltate per il keyup)
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (usate created o mounted!).
*/


const app = new Vue({
    el: '#app',
    data: {
        index: 0,
        images: [
            './asset/img/puglia-1.jpg',
            './asset/img/puglia-2.jpg',
            './asset/img/puglia-3.jpg',
            './asset/img/puglia-4.jpg',
            './asset/img/puglia-5.jpg',
            './asset/img/puglia-6.jpg'
        ]
    },
    methods: {
        prev() {
            //console.log('prev');
            if (this.index === 0) {
                return this.index = this.images.length - 1
            }
            return this.index -= 1;

        },
        next() {
            //console.log('next');
            if (this.index === this.images.length - 1) {
                return this.index = 0
            }
            return this.index += 1;
        },
        changeImage(index) {
            return this.index = index;
        }
    },

    mounted() {
        setInterval(this.next, 3000);
    }

});


document.addEventListener('keyup', (ev) => {
    // console.log(ev);
    if (ev.code === 'ArrowRight') {
        app.prev();
    } else if (ev.code === 'ArrowLeft') {
        app.next();
    }
})