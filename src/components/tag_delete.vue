<template>
	<section class="section">
         <div class="container" style="width: 600px">
            <div class="column">
               <!-- form -->
               <form v-on:submit="deleteTag">
               <div class="box">
                  <div class="content">
                     <p class="title is-3">Delete This Tag ?</p>
                     <p class="subtitle is-5">Are you sure that you want to delete this tag?</p>
                     <div class="field is-grouped">
                        <div class="control">
                           <button class="button is-danger">
                           <span class="icon">
                           <i class="fa fa-trash-o"></i>
                           </span>
                           <span>Yes, Delete!</span>
                           </button>
                        </div>
                        <div class="control">
                           <router-link to="/tags" class="button">                 
                           <span>Cancel</span>
                           </router-link>
                        </div>
                     </div>
                  </div>
               </div>
               </form>
            </div>
         </div>
      </section>
</template>

<script>
	export default {
		name: 'tag_delete',
		data(){
			return {
				tag: {}
			}
		},
		methods: {
			deleteTag: function(){
				this.$http.delete('http://slim.amicloud.me/public/api/tag/delete/'+ this.$route.params.label_id)
					.then(function(response){
						console.log("Tag Deleted");
						this.$router.push({ path: '/tags'});
					});
			}
		}
	}
</script>