<template>
  <div class="home">
    <!--Section Banner-->
    <section class="banner">
        <div class="container-fluid">
            <div class="row ">
                <div class="text-title-banner center-text col-12 col-sm-12 col-lg-12 col-xl-12 ">
                    <h4 class="h4-style"> Lorem ipsum dolor sit amet . </h4>
                    <h4 class="h4-style"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>

                    <div class="btn-startud  col-12 col-sm-12 col-lg-12 col-xl-12 ">
                        <button class=" btn-style-startud ">Categorie</button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!--Section Facture-->
    <section class="facture">
        <div class="container">
            <div class="row">
                <div class="title col-12 col-sm-12 col-lg-12 col-xl-12 ">
                    <h4>Facture</h4>
                    <hr>
                </div>

                <div class=" box col-12 col-sm-12 col-lg-4 col-lx-4 ">
                    <div class="card-group">
                        <div class="card">
                            <img class="card-img-top img-fluid" 
                                src="https://w.wallhaven.cc/full/ey/wallhaven-eyw5qw.jpg" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" class="btn btn-outline-info btn-style-card">visit info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" box col-12 col-sm-12 col-lg-4 col-lx-4 ">
                    <div class="card-group">
                        <div class="card">
                            <img class="card-img-top img-fluid"
                                src="https://w.wallhaven.cc/full/ey/wallhaven-eyw5qw.jpg" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" class="btn btn-outline-info btn-style-card">visit info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" box col-12 col-sm-12 col-lg-4 col-lx-4 ">
                    <div class="card-group">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="https://w.wallhaven.cc/full/ey/wallhaven-eyw5qw.jpg" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" class="btn btn-outline-info btn-style-card">visit info</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
    
    
        </div>    
    </section>
    <!--Section Banner-->


    <!--Section category-->
    <section class="category">
        <div class="container">
            <div class="row mt-5">
                <div class="title col-12 col-sm-12 col-lg-12 col-xl-12 ">
                    <h4>Categorys</h4>
                    <hr>
                </div>
            </div>
            <div class="row indexCategorie">
                <div class="pt-5 col-md-3" v-for="category in array_categories_home" :key="category.id">
                    <CardCategory :card_categorie_data="category"></CardCategory>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CardCategory from "@/components/CardCategory.vue";

export default {
  name: 'home',
  components: {
    CardCategory
  },
data(){
    return {
      urlAPI: 'https://fundamentos.academlo.com/api/v1',
      directorieUUID: '5c82982e-b63e-4280-8287-4eba0e99716a',
      products: [ ],
      categories_data: [ ],
      array_products_home: [ ],
      array_categories_home: [ ]
    }
  },
  created(){
    //HERE FUNCTIONS TO LOAD DATA FROM THE AXIOS HTTP REQUEST
    this.getHomeData();
  },
  methods: {
    //Function to get products
    getHomeData() {
      const endPointCategories = `${this.urlAPI}/directories/${this.directorieUUID}/categories`;
      
      let randomProducts;

      axios.get(endPointCategories)
        .then(response => {
          this.categories_data = response.data;
          randomProducts = (Math.floor(Math.random() * this.categories_data.categories.length));

          //
          for (let i = 0; i < 8; i++) {
            this.array_categories_home.push(this.categories_data.categories[i]);
          }
          //

          if(randomProducts == 0){
            randomProducts = 1;
          } else {

            let endPointProducts = `${this.urlAPI}/categories/${this.categories_data.categories[randomProducts].uuid}/products`;
            console.log(endPointProducts);

            axios.get(endPointProducts)
              .then(response => {
                this.products = response.data

                if(this.products.products.length > 2){
                  for (let i = 0; i < 3; i++) {
                    this.array_products_home.push(this.products.products[i]);
                  }
                }

              })
              .catch(err => {
                alert(`Its not possible load data from de API - PRODUCTS`);
              });
          }
        })
        .catch(err => {
          alert(`Its not possible load data from de API - CATEGORIES`);
        });
    }
  }
};
</script>
