<template>
    <div class="page">
        <HeaderComponent />
        <div class="title-container">
            <img class="title" src="../assets/Spider-Man-Logo.png" />
        </div>
        <div class="topics-container">
            <div class="topic">
                <img class="topic-image" src="../assets/Stories-image.jpg" @click="goToStories">
                <h2>Stories</h2>
            </div>
            <div class="topic">
                <img class="topic-image" src="../assets/Characters-image.jpg" @click="goToCharacters">
                <h2>Characters</h2>
            </div>
            <div class="topic">
                <img class="topic-image" src="../assets/Midia-image.png" @click="goToMidia">
                <h2>Midia</h2>
            </div>
            <div class="topic">
                <img class="topic-image" src="../assets/Authors-image.png" @click="goToAuthors">
                <h2>Authors</h2>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'HomePage',
    components: {
        HeaderComponent,
        FooterComponent
    },
    data() {
        return {
            backgroundImage: require('../assets/marvel-background.png'),
            spidermanLogo: require('../assets/Spider-Man-Logo.png')
        }
    },
    methods: {
        goToStories() {
            this.$router.push('Stories')
        },
        goToCharacters() {
            this.$router.push('Characters');
        },
        goToMidia() {
            this.$router.go('/midia');
        },
        goToAuthors() {
            this.$router.go('/authors');
        }
    }
}
</script>

<style scoped>
* {
    font-family: "Inter", sans-serif;
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

.title-container {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    margin-top: 1rem;
    width: 20%;
}

.topics-container {
    background-color: #181111;
    display: flex;
    justify-content: space-evenly;
    align-items: top;
    height: 400px;
    margin: 8rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
    padding-top: 4rem;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
}

.topic {
    border: 4px solid white;
    border-radius: 8px;
    height: 64%;
    width: 22%;
}

.topic-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    cursor: pointer;
}

.footer-container {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
</style>