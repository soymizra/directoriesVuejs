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
                <!-- <div class="col-md-3 col-sm-12 mb-3">
                    <div class="card bg-dark text-white cardCategory">
                        <img src="./static/img/00.jpg" class="card-img" alt="...">
                        <div class="overlay"></div>
                        <div class="card-content">
                            <span class="iconCategory material-icons">flash_on</span>
                            <h3 class="card-title">Category 1</h3>
                            <p class="">2 listings</p>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
