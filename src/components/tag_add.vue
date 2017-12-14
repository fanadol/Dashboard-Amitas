<template>
	<section class="section">
         <div class="container" style="width: 900px">
            <div class="column">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                     <li><a href="tags.html">Tags</a></li>
                     <li class="is-active"><a href="#" aria-current="page">New Tag</a></li>
                  </ul>
               </nav>
               <!-- form -->
               <form v-on:submit="addTag">
               <div class="box">
                  <p class="title is-3">New Tag</p>                  
                  <div class="content">
                     <div class="field">
                        <label class="label">Name</label>
                        <div class="control">           
                           <input class="input" type="text" placeholder="Add tag name" v-model="labelName">                   
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Tag Color</label>
                        <div class="control">           
                           <input class="input" type="text" placeholder="Add color hex" v-model="labelColor">                           
                        </div>
                     </div>
                     <br>
                     <div class="field is-grouped">
                       <div class="control">
                           <button type="submit" class="button is-success">
                           <span class="icon">
                           <i class="fa fa-paper-plane"></i>
                           </span>
                           <span>Submit</span>
                           </button>
                        </div>
                        <div class="control">
                           <router-link to="/tags" class="button is-light">
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
		name: 'tag_add',
		data(){
			return {
				labelName: '',
				labelColor: ''
			}
		},
		methods: {
			addTag:function(){
				if(!this.labelName || !this.labelColor){
					console.log("Please fill all required fields!");
				} else {
					let newTag = {
						label_name: this.labelName,
						label_color: this.labelColor
					}

					this.$http.post('http://slim.amicloud.me/public/api/tag/add', newTag)
						.then(function(response){
							console.log("Tag Added");
							this.$router.push({path: '/tags'})
						});
				}
			}
		}
	}
</script>