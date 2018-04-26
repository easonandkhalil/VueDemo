Vue.component('like', {
    template: '<button :class="{liked: liked}" @click="toggele_like">点赞 {{like_count}}</button>',
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
            else{
                this.like_count--;
                this.liked = !this.liked;
            }
        }
    }
})

new Vue({
    el: '#app',
})