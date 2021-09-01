const app = Vue.createApp({
    // data, function
    // template: "<h2>this is dynamic template<h2/>"
    data(){
        return {
            // title: "the final empire",
            // author: "brandon sanderson",
            // age: 45,
            url: "https://farhanabsartafader.netlify.app/",
            showBooks: true,
            books: [
                { title: "the final empire", author: "brandon sanderson", age: 45, image: "./assets/1.jpg", isFav: true },
                { title: "the thousand sun", author: "ricky james", age: 55, image: "./assets/2.jpg", isFav: false },
                { title: "wings of fire", author: "morty mandent", age: 65, image: "./assets/3.jpg", isFav: true }
            ]
        }
    },
    methods: {
        // changeTitle(title){
        //     this.title = title
        // }
        // hideBooks(){
        //     this.showBooks = false
        // }
        toggleBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(item){
            item.isFav = !item.isFav
        }
    }
})

app.mount("#app")