<template>
    <div class="page">
        <HeaderComponent/>
        <img class="back-arrow" src="../assets/back-arrow-icon.png" @click="goToHome"/>
        <div class="author-container">
            <img class="arrow" src="../assets/left-arrow.png" @click="previousAuthor"/>
            <img class="author-image" :src="authors[index].thumbnail"/>
            <div class="author-info">
                <h1 style="font-weight: bolder;color: white;">{{ authors[index].name }}</h1>
                <h2 style="color:white">Comics: {{ authors[index].comics }}</h2>
            </div>  
            <img class="arrow" src="../assets/right-arrow.png" @click="nextAuthor"/>
        </div>
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import axios from 'axios';

export default {
    name: 'AuthorsPage',
    components: {
        HeaderComponent,
        FooterComponent
    },
    data() {
        return {
            authors: [{}],
            index: 0
        }
    },
    methods: {
        goToHome(){
            this.$router.push('/')
        },
        nextAuthor() {
            this.index = this.index + 1
            if (this.index >= this.authors.length)
                this.index = 0
        },
        previousAuthor(){
            this.index = this.index - 1
            if (this.index < 0)
                this.index = this.authors.length - 1
        }
    },
    created() {
        axios.get('http://localhost:3000/author')
            .then(response => {
                this.authors = response.data
                //order by comics
                this.authors.sort((a, b) => b.comics - a.comics)
            })
    }

}

</script>

<style scoped>
* {
    font-family: "Inter", sans-serif;
}

.arrow{
    height: 16%;
    margin: auto;
    margin-left: 4vw;
    margin-right: 4vw;
    cursor: pointer;
}

.author-info{
    width: 100%;
    padding: 4%;
}

.author-image {
    margin-top: 4%;
    margin-left: 4%;
    height: 72%;
    width: 24%;
    border: 1px solid white;
}

.author-container {
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

.page {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('../assets/marvel-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}
</style>