<template>
	<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
         <div class="container">
         <div class="navbar-brand">
            <a class="navbar-item" href="index.html">
            <img src="../../node_modules/bulma/img/amitas_logo.svg" alt="Logo" width="112" height="28">
            </a>
            <div class="navbar-burger burger" data-target="navMenu">
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
         <div class="navbar-menu" id="navMenu">
            <div class="navbar-start">
               <router-link class="navbar-item is-active" to="/">
               Users
               </router-link>
               <router-link class="navbar-item" to="/threads">
               Threads
               </router-link>
               <a class="navbar-item" href="groups.html">
               Groups
               </a>
               <router-link class="navbar-item" to="/tags">
               Tags
               </router-link>
            </div>
            <div class="navbar-end">
               <!-- my account -->
               <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link" target="_blank">
                  My Account
                  </a>
                  <div class="navbar-dropdown is-boxed">
                     <a class="navbar-item" href="profile.html">My Profile</a>
                     <hr class="navbar-divider">
                     <a class="navbar-item" href="login.html">Logout</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </nav>
</template>

<script>
	export default {
		name: 'navbar'
	}
</script>