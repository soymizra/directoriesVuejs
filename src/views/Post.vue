<template>
    <div class="container">
            <div class="row mt-5 mb-5">
                <div class="col-md-6 d-flex align-items-start flex-column">
                    <div class="mb-auto p-2">
                        <h6><span class="badge badge-secondary categorie">categorie</span></h6>
                        <h1 class="titulo">{{ this.titleProduct }}</h1>
                        <p class="descripcion">{{ this.descProduct }}</p>
                    </div>
                    
                    <div class="d-flex justify-content-space">
                        <a :href="this.urlProduct" class="btn btn-primary url"> Visit website </a>
                        <div>
                            <a href="" class="fb">facebook</a>
                            <a href="" class="tw">twitter</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 product">
                    <div class="imagen">
                        <img :src="this.imgUrlProduct" class="img-fluid" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
   
</template>
<script>
export default {
    data(){
        return {
            urlAPI: 'http://fundamentos.academlo.com/api/v1',
            directorieUUID: '5c82982e-b63e-4280-8287-4eba0e99716a',
            titleProduct: '',
            descProduct: '',
            imgUrlProduct: '',
            urlProduct: ''
        }
    },
    created(){
        this.getProductDetails();
    },
    methods: {
        getProductDetails() {
            let endPointProduct = `${this.urlAPI}/products/${this.$route.params.uuid}`;

            axios.get(endPointProduct)
                .then(response => {
                    this.titleProduct = response.data.name;
                    this.descProduct = response.data.description;
                    this.imgUrlProduct = response.data.image;
                    this.urlProduct = response.data.url;
                    
                    console.log(response.data);
                })
                .catch(err => {
                    alert(`Its not possible load data from de API - PRODUCTS DETAILS`);
                })
            console.log(`This is the product ${this.$route.params.uuid}`);
        }
    }
}
</script>
<style scoped>
    .principal-text h1 {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .principal-text p {
        font-size: 1rem;
        font-weight: 200;
    }

    #row-data {
        min-height: calc(100vh - 280px);
    }

    i {
        font-size: 2em;
        color: #343A40;
        border-radius: 50%;
        /*border: solid 1px #343A40;*/
    }

    .btn {
        border: 2.2px solid #8E8E8E;
        font-size: 1.5rem;
        font-weight: 600 !important;
    }

    .card-img img {
        width: 100%;
    }

    .card-img {
        height: 60vh !important;
        border-radius: 5px;
        border: solid 1px #CCCCCC;
        overflow: auto;
    }
</style>