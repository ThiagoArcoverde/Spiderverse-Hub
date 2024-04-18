<template>
    <div class="page">
        <HeaderComponent />
        <img class="back-arrow" src="../assets/back-arrow-icon.png" @click="goToHome"/>
        <div class="story-container">
            <img class="arrow" src="../assets/left-arrow.png" @click="previousStory"/>
            <img class="story-image" :src="stories[index].thumbnail" />
            <div class="story-info">
                <h1 style="font-weight: bolder;color: white;">{{ this.stories[index].title }}</h1>
                <h2 style="color:white">{{ this.stories[index].pageCount}} pages</h2>
                <h2 style="font-weight: bold;color: red;">Description:</h2>
                <p v-if="this.stories[index].description !== ''" style="color:white;">{{ this.stories[index].description }}</p>
                <p v-else style="color:white;">There is no description yet available for this comic, maybe you could try it later!</p>
            </div>  
            <img class="arrow" src="../assets/right-arrow.png" @click="nextStory"/>
        </div>
        <FooterComponent/>
    </div>


</template>

<script>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'StoriesPage',
    data() {
        return {
            index: 0,
            stories: [{}]
        }
    },
    created() {
        axios.get('http://localhost:3000/stories')
            .then(response => {
                this.stories = response.data
                console.log(this.stories[this.index].title)
            })
    },
    components: {
        HeaderComponent,
        FooterComponent
    },
    methods: {
        goToHome(){
            this.$router.push('/')
        },
        nextStory() {
            this.index = this.index + 1
            if (this.index >= this.stories.length)
                this.index = 0
        },
        previousStory(){
            this.index = this.index - 1
            if (this.index < 0)
                this.index = this.stories.length - 1
        }
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

.story-info{
    width: 100%;
    padding: 4%;
}

.story-image {
    margin-top: 4%;
    margin-left: 4%;
    height: 72%;
    width: 24%;
    border: 1px solid white;
}

.story-container {
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