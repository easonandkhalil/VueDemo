// Vue.component('alert', {
//     template: '<button @click="on_click">弹弹弹</button>',
//     methods: {
//         on_click: function () {  
//             alert('yo');
//         }
//     }
// })

var alert_component = {
    template: '<button @click="on_click">弹弹弹</button>',
    methods: {
        on_click: function () {  
            alert('yo');
        }
    }
}

new Vue({
    el: "#app",
    components: {
        alert: alert_component
    }
})