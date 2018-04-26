//Vue.component('标签名', {})
Vue.component('like', {
    template: '#like-component',
    data: function () {
        return {
            like_count: 10,
            liked: false
        }
    },
    methods: {
        toggele_like: function () {
            if (!this.liked) {
                this.like_count++;
                this.liked = !this.liked;
            }
            else {
                this.like_count--;
                this.liked = !this.liked;
            }
        }
    }
})

new Vue({
    el: '#app',
})