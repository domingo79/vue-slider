const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
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
            console.log('prev');
            if (this.counter === 0) {
                return this.counter = this.images.length - 1
            }
            return this.counter -= 1;

        },
        next() {
            console.log('next');
            if (this.counter === this.images.length - 1) {
                return this.counter = 0
            }
            return this.counter += 1;
        }
    }

})