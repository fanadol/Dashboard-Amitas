<template>
	<section class="section">
         <div class="container" style="width: 900px">
            <div class="column">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                     <li><a href="tags.html">Tags</a></li>
                     <li class="is-active"><a href="#" aria-current="page">Detail Tag</a></li>
                  </ul>
               </nav>
               <!-- form -->
               <form v-on:submit="updateTag">
               <div class="box">
                  <p class="title is-3">Detail Tag</p>                  
                  <div class="content">
                     <div class="field">
                        <label class="label">Name</label>
                        <div class="control">           
                           <input class="input" type="text" v-model="tag.label_name">                   
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Tag Color</label>
                        <div class="control">           
                           <input class="input" type="text" v-model="tag.label_color">                           
                        </div>
                     </div>
                     <br>
                     <div class="field is-grouped">
                        <div class="control">
                           <button type="submit" class="button is-success">
                           <span class="icon">
                           <i class="fa fa-floppy-o"></i>
                           </span>
                           <span>Save Changes</span>
                           </button>
                        </div>
                        <div class="control">
                           <router-link to="/tags" class="button">
                           <span>Go Back</span>
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
		name: 'tag_edit',
		data(){
			return {
				tag: {},
			}
		},
		methods: {
			fetchTag: function(id){
				this.$http.get('http://slim.amicloud.me/public/api/tag/' + id)
					.then(function(response){
						this.tag = response.data;
						console.log(this.tag);
					});
			},
			updateTag: function(){
				let updTag = {
					label_name: this.tag.label_name,
					label_color: this.tag.label_color
				}

				this.$http.put('http://slim.amicloud.me/public/api/tag/update/' + this.$route.params.label_id, updTag)
					.then(function(response){
						console.log('Tag Updated');
						this.$router.push({path: '/tags'});
					});
			}
		},
		created: function(){
			this.fetchTag(this.$route.params.label_id);
		}
	}
</script>