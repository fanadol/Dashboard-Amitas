<template>
  <section class="section">
         <div class="container" style="width: 900px">
            <div class="column">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                     <li><a href="index.html">User</a></li>
                     <li class="is-active"><a href="#" aria-current="page">Detail User</a></li>
                  </ul>
               </nav>
               <!-- form -->
               <div class="box">
                  <p class="title is-3">Detail User</p>
                  <div class="field">
                     <div class="control">
                        <label class="label">Profile Photo</label>
                        <figure class="image is-96x96">
                           <img :src="user.user_photo">
                        </figure>
                     </div>
                  </div>
                  <div class="content">
                     <div class="field">
                        <label class="label">Name</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="user.name" readonly>
                           <span class="icon is-small is-left">
                           <i class="fa fa-user"></i>
                           </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Prodi</label>
                        <div class="control">           
                           <input class="input" type="text" v-model="user.prodi" readonly>               
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Role</label>
                        <div class="control">           
                           <input class="input" type="text" v-model="user.status" readonly>               
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Social Link</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="user.social_link" readonly>
                           <span class="icon is-small is-left">
                           <i class="fa fa-facebook-square"></i>
                           </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Password</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="user.password" readonly>
                           <span class="icon is-small is-left">
                           <i class="fa fa-lock"></i>
                           </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Confirm Password</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="user.password" readonly>
                           <span class="icon is-small is-left">
                           <i class="fa fa-lock"></i>
                           </span>
                        </div>
                     </div>
                     <br>
                     <div class="field is-grouped">
                        <div class="control">
                           <router-link :to="'/user/edit/'+ user.user_id" class="button is-info modal-button">
                           <span class="icon">
                           <i class="fa fa-pencil"></i>
                           </span>
                           <span>Edit</span>
                           </router-link>
                        </div>
                        <div class="control">
                           <a href="index.html" class="button">
                           <span>Go Back</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>

<script>
  export default{
    name: 'view',
    data(){
      return{
        user:{}
      }
    },
    methods: {
      fetchUser: function(id){
        this.$http.get('http://slim.amicloud.me/public/api/user/'+id)
              .then(function(response){
                this.user = response.body;
                console.log(this.user);
      });
      }
    },
    created: function(){
      this.fetchUser(this.$route.params.user_id);
    }
  }
</script>