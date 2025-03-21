<template>
    <h1>Doggos</h1>
    <div>
    </div>

</template>



<script>

  export default{
    data() {
      return {}
    },

    methods: {
      async listBreeds(){
        try{
          const response = await fetch("https://dog.ceo/api/breeds/list/all")

          if(!response.ok){
              throw new Error('Could not fetch data')
          }

          const data = await response.json()
          console.log(data.entries)
        } 
        catch(error){
          console.error(error)
        } 
      },
    },

    beforeMount() {
      this.listBreeds()
    }

  }
</script>

<style>
  .h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover{
    background: #ddd;
  }

  .job a{
    text-decoration: none;
  }

</style>