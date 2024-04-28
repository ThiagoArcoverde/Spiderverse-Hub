<template>
    <div class="page">
        <HeaderComponent />
        <img class="back-arrow" src="../assets/back-arrow-icon.png" @click="goToHome"/>
        <div class="character-container">
            <img class="arrow" src="../assets/left-arrow.png" @click="previousCharacter"/>
            <img class="character-image" :src="characters[index].imageUrl" alt="Character Image"/>
            <div class="character-info">
                <h1 style="font-weight: bolder;color: white;">{{ this.characters[index].name }}</h1>
                <h2 style="font-weight: bold;color: red;">Description:</h2>
                <p style="color:white;">{{ this.characters[index].description }}</p>
            </div>  
            <img class="arrow" src="../assets/right-arrow.png" @click="nextCharacter"/>
        </div>
        <FooterComponent/>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    name: 'CharactersPage',
    components: {
        HeaderComponent,
        FooterComponent
    },
    data(){
        return {
            index: 0,
            characters: [{}]
        }
    },
    created(){
        axios.get('http://localhost:3000/character')
            .then(response => {
                this.characters = response.data
                //sort characters
                this.characters.sort((a, b) => a.id - b.id)
                this.characters.map(character => {
                    console.log(character.thumbnail)
                    character.imageUrl = require(`../assets/${character.thumbnail}`)
                })
            })
    },
    methods: {
        nextCharacter() {
            this.index = this.index + 1
            if (this.index >= this.characters.length)
                this.index = 0
        },
        previousCharacter(){
            this.index = this.index - 1
            if (this.index < 0)
                this.index = this.characters.length - 1
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

.arrow{
    height: 16%;
    margin: auto;
    margin-left: 4vw;
    margin-right: 4vw;
    cursor: pointer;
}

.character-info{
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