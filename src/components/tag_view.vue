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
               <div class="box">
                  <p class="title is-3">Detail Tag</p>                  
                  <div class="content">
                     <div class="field">
                        <label class="label">Name</label>
                        <div class="control">           
                           <input class="input" type="text" v-model="tag.label_name" readonly>                   
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Tag Color</label>
                        <div class="control">           
                           <input class="input" type="text" v-model="tag.label_color" readonly>                           
                        </div>
                     </div>
                     <br>
                     <div class="field is-grouped">
                        <div class="control">
                           <router-link :to="'/tag/edit/'+ tag.label_id" class="button is-info modal-button">
                           <span class="icon">
                           <i class="fa fa-pencil"></i>
                           </span>
                           <span>Edit</span>
                           </router-link>
                        </div>
                        <div class="control">
                           <router-link to="/tags" class="button">
                           <span>Go Back</span>
                           </router-link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>

<script>
	export default {
		name: 'tag_view',
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
			}
		},
		created: function(){
			this.fetchTag(this.$route.params.label_id);
		}
	}
</script>