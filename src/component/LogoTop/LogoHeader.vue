<template>
    <div class="bg-color flex height d-flex align-items-center">
            <img class="image color-logo mx-4" src="../../assets/logo-small-spotify.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "LogoHeader"
        
    }
</script>

<style lang="scss" scoped>
.height{
        height: 100px;
    }
    .image{
        width: 3%
    }
    .bg-color{
        background-color: #2E3A46;
    }
    .color-logo{
        color:#1DD65F ;
    }

</style>