<template>
    <div class="page">
        <HeaderComponent />
        <img class="back-arrow" src="../assets/back-arrow-icon.png" @click="goToHome" />
        <div class="character-container">
            <img class="arrow" src="../assets/left-arrow.png" @click="previousMidiar" />
            <img class="character-image" :src="this.midia[index].imageUrl" alt="Character Image" />
            <div class="character-info">
                <h1 style="font-weight: bolder;color: white;">{{ this.midia[index].title }}</h1>
                <h2 style="font-weight: bold;color: red;">Description:</h2>
                <p style="color:white;">{{ this.midia[index].description }}</p>
            </div>
            <img class="arrow" src="../assets/right-arrow.png" @click="nextMidia" />
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import axios from 'axios';

export default {
    components: {
        HeaderComponent,
        FooterComponent
    },
    data() {
        return {
            index: 0,
            midia: [{}]
        }
    },
    created() {
        axios.get('http://localhost:3000/midia')
            .then(response => {
                this.midia = response.data
                //sort midia
                this.midia.sort((a, b) => a.id - b.id)
                this.midia.map(midia => {
                    console.log(midia.thumbnail)
                    midia.imageUrl = require(`../assets/${midia.thumbnail}`)
                })
            })
    },
    methods: {
        nextMidia() {
            this.index = this.index + 1
            if (this.index >= this.midia.length)
                this.index = 0
        },
        previousMidia(){
            this.index = this.index - 1
            if (this.index < 0)
                this.index = this.midia.length - 1
        },
        goToHome(){
            this.$router.push('/')
        }
    }

}
</script>

<style scoped>
* {
    font-family: "Inter", sans-serif;
}

h2 {
    color: white;
    font-size: 2rem;
}

h4 {
    color: white;
    font-size: 1rem;
    text-align: center;
}

.page {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('../assets/marvel-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}

.arrow {
    height: 16%;
    margin: auto;
    margin-left: 4vw;
    margin-right: 4vw;
    cursor: pointer;
}

.character-info {
    width: 100%;
    padding: 4%;
}

.character-image {
    margin-top: 4%;
    margin-left: 4%;
    height: 72%;
    width: 24%;
    border: 1px solid white;
}

.character-container {
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 2vh;
    background-color: #181111;
    width: 80vw;
    height: 64vh;
    border-radius: 16px;
}

.back-arrow {
    width: 50px;
    height: 50px;
    margin-top: 2vw;
    margin-left: 10vw;
    cursor: pointer;
}
</style>