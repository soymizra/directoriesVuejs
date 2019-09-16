<template>
  <section id="app" >
    <div class=" Menu container-fluid">
      <div class="row">
        <div class="menu-responsivo col-xs-9 col-lg-9 d-none d-lg-block" id="options">
          <nav id="nav">
            <ul class="nav justify-content-start">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/explore">Explore</router-link>
              </li>
              <li>
                <a href="#" class="decoracion">Add a listing</a>
              </li>              
            </ul>
          </nav>
        </div>
        <div class="logo col-xs-2 col-lg-2 col-sm-12 col-10 d-flex justify-content-center">
          <img
            src="https://trello-attachments.s3.amazonaws.com/5d5219765253b33219ccae57/300x81/0cb7bd1ed8fd13b1a07d19e6a1e07a6b/fuente_negro.png"
            class="img-fluid"
          />
        </div>
        <div class="justify-content-end col-sm-1 col-1 display-menu-hambur d-lg-none">
          <span class="burguer-menu" onclick="openMenu()">
            <i class="fas fa-bars"></i>
          </span>
        </div>
      </div>
    </div>
    
  <router-view />

  <footer class="mt-5">
            <div class="container-fluid">
                <div class="row justify-content-between">
                    <div class="col-4 box center-text">
                        <p>Do you like BRAND?
                            <span> Advertise with us</span>
                        </p>
                    </div>
                    <div class="col-4 box center-text">
                        <p>Developed by: <span>Equipo Chido</span></p>
                    </div>

                </div>
            </div>
        </footer>
  </section>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
