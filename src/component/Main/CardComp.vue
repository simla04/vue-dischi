<template>
  <div class="card d-flex">
    <div class="col">
      <div class=" undercard1 d-flex justify-content-center">
        <div class="imagecard image-fluid">
            <img class="image-fluid" :src="get.poster" alt="">
        </div>
        </div>
        <div class=" undercard2 ">
        <h2 class="text-light mt-2">{{get.title}}</h2>
        <h3 class="text-light mt-4">{{get.author}}</h3>
        <h3 class="text-light">{{get.genre}}</h3>
        <h3 class="text-light">{{get.year}}</h3>
        </div> 
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'CardComp',
  props: {
    get: Object,
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .card{
    width:calc(100% / 5 - 10px);
    height:500px;
    background-color: #2E3A46;
    
}
.undercard1{
    height:60%;
}
.undercard2{
    height:40%;
}
.imagecard{
    width:80%;
    height:100%;
    aspect-ratio: 1/1;
    
}
.card:hover{
    background-color: #4e5d6c;
}
img{
    width:70%;
}
    

</style>
