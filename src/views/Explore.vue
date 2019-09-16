<template>
    <div class="container-fluid mt-5">
        <h1>Categories</h1>
        <div class="m-3">
            <div>
              <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
              <div class="input-group">
                <input type="text" class="form-control" id="inlineFormInputGroupUsername"
                  placeholder="Explore categorys">
                <div class="input-group-prepend">
                  <button class="input-group-text btnSearchCategory"><i
                      class="large material-icons">search</i></button>
                </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="pt-5 col-md-3" v-for="categoryComp in categories_data" :key="categoryComp.id">
                <CardCategory :card_categorie_data="categoryComp"></CardCategory>
            </div>
        </div>
    </div>
</template>
<script>

  import CardCategory from "@/components/CardCategory.vue";

    export default {
        components: {
            CardCategory
        },
        data(){
            return {
                urlAPI: 'http://fundamentos.academlo.com/api/v1',
                directorieUUID: '5c82982e-b63e-4280-8287-4eba0e99716a',
                categories_data: [ ]
            }
        },
        created(){
            //HERE FUNCTIONS TO LOAD DATA FROM THE AXIOS HTTP REQUEST
            this.getAllCategories()
        },
        methods: {
            getAllCategories() {
                const endPointCategories = `${this.urlAPI}/directories/${this.directorieUUID}/categories`;

                axios.get(endPointCategories)
                    .then(response => {
                        this.categories_data = response.data.categories;
                    })
                    .catch(err => {

                    });
            }
        }
    }
</script>