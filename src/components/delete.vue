<template>
	<section class="section">
         <div class="container" style="width: 600px">
            <div class="column">
               <!-- form -->
               <div class="box">
                  <div class="content">
                     <p class="title is-3">Delete {{user.name}} ?</p>
                     <p class="subtitle is-5">Are you sure that you want to delete this user?</p>
                     <div class="field is-grouped">
                        <div class="control">
                           <button class="button is-danger" v-on:click="deleteUser(user.user_id)">
                           <span class="icon">
                           <i class="fa fa-trash-o"></i>
                           </span>
                           <span>Yes, Delete!</span>
                           </button>
                        </div>
                        <div class="control">
                           <a href="index.html" class="button">                 
                           <span>Cancel</span>
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
		name: 'dlt',
		data(){
			return {
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
		  },
		  deleteUser: function(id){
		  	this.$http.delete('http://slim.amicloud.me/public/api/user/delete/'+id)
		  	.then(function(response){
		  		this.$router.push({path: '/'});
		  	}, function(error){
		  		this.$router.push({path: '/user/delete_fail'})
		  		console.log(error.statusText);
		  	});
		  }
		},
		created: function(){
		  this.fetchUser(this.$route.params.user_id);
		}
	}
</script>