<template>
    <router-link :to="'/categories/'+card_categorie_data.uuid">
    <div class="card card-styles">
        <div class="card-description d-flex justify-content-center align-items-center flex-wrap ">
          <i class="far fa-file icon-style "></i>
          <h3 class="title-description d-block w-100 text-center">
            {{ card_categorie_data.name }}
          </h3>
          <p class="sub-title-description">
            5 Entradas
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80"
          alt="Foto 1" />
      </div
      ></router-link>
</template>
<script>
    export default {
        props: ['card_categorie_data']
    }
</script>