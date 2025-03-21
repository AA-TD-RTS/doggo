<template>
  <div class="text-3xl font-bold underline">
    Homepage
    <img src="" alt="">
    
  </div>
  <div class="grid grid-cols-3 gap-2 mt-2 mx-2">
    <div ><img class="h-200" id="dogImage3" src= "" alt=""></div>
    <div ><img class="h-200" id="dogImage1" src= "" alt="" ></div>
    <div ><img class="h-200" id="dogImage2" src= "" alt=""></div>
  </div>

  
  
</template>

<script lang="ts">

  import { defineComponent} from 'vue';
  
  export default defineComponent({
    name: 'HomeView',
    components: {},
    data() {
      return {
      }
    },
    methods: {
      async fetchPictue(num: number){
        try{
          const response = await fetch("https://dog.ceo/api/breeds/image/random")


          if(!response.ok){
            throw new Error('Could not fetch data')
          }


          const data = await response.json()
          const pic = data.message as string
          console.log(pic)
          const type =pic.split("/",5)
          console.log(type[4])
          
          const elem1 = document.getElementById(`dogImage${num}`) as HTMLImageElement
          const l1 = document.getElementById(`linkdogImage${num}`)
          elem1.src = pic
          
        }
        catch(error){
          console.error(error)
        }
        
      },
    },
    beforeMount() {
      this.fetchPictue(1)
      this.fetchPictue(2)
      this.fetchPictue(3)
    },
  });
  
</script>