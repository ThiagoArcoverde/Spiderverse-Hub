<template>
    <div class="container">
        <img class="logo" src="../assets/site-logo.png" alt="Github Logo" width="200" height="50" @click="goToHome">
        <img class="logo" src="../assets/github-red.png" alt="Github Logo" width="50" height="50" @click="openGithub">
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    methods: {
        openGithub(){
            window.open('https://github.com/ThiagoArcoverde/Spiderverse-Hub', '_blank');
        },
        goToHome(){
            var path = this.$router.path
            if(path !== '/'){
                this.$router.push('/')
            }
        }
    }
}

</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 8vh;
        background-color: #181111;
        color: 181111;
        border-bottom: 4px white solid;
        padding-right: 2rem;
        padding-left: 2rem;
    }

    .logo{
        cursor: pointer;
    }
</style>