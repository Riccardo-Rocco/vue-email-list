const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            emailList: [],
        };
    },
    methods: {
        getMails(quantity) {
            this.emailList = [];
            for (let i = 0; i < quantity; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(r => {
                    const email = r.data.response;
                    this.emailList.push(email);
                });
            }
        },
    },
});

app.mount('#app');
