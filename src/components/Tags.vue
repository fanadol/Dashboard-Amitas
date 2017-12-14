<template>
	<section class="section">
         <div class="container">
            <div class="columns">
               <div class="column is-one-third is-left">
                  <h1 class="title">1 Tags</h1>
               </div>
               <div class="column">
                  <div class="field is-grouped is-grouped-right">
                     <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Search Tags" v-model="filterInput">
                        <span class="icon is-left">
                        <i class="fa fa-search"></i>
                        </span>                
                     </p>
                     <p class="control">
                        <router-link to="/tag/add" class="button is-success">
                           <span class="icon">
                           <i class="fa fa-plus"></i>
                           </span>
                           <span>New Tag</span>
                        </router-link>
                     </p>
                  </div>
               </div>
            </div>
            <div class="column">
               <div class="box">
                  <div class="content">
                     <table class="table is-striped is-hoverable">
                        <thead>
                           <tr>
                              <th>Id</th>
                              <th>Tag Name</th>
                              <th>Tag Color</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody v-for="tag in filterByTag">
                           <tr>
                              <td>{{tag.label_id}}</td>
                              <td>{{tag.label_name}}</td>
                              <td>{{tag.label_color}}</td>
                              <td>
                                 <div class="field">
                                   	<router-link :to="'/tag/detail/'+ tag.label_id" class="button modal-button">
                                       <span class="icon">
                                       <i class="fa fa-eye"></i>
                                       </span>
                                       <span>View</span>
                                    </router-link>
                                    <router-link :to="'/tag/edit/'+ tag.label_id" class="button is-info modal-button">
                                       <span class="icon">
                                       <i class="fa fa-pencil"></i>
                                       </span>
                                       <span>Edit</span>
                                    </router-link>
                                    <router-link :to="'/tag/delete/' + tag.label_id" class="button is-danger modal-button">
                                       <span class="icon">
                                       <i class="fa fa-trash"></i>
                                       </span>
                                       <span>Delete</span>
                                    </router-link>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>

<script>
	export default {
		name: 'tags',
      created: function(){
         this.fetchTags();
      },
		data(){
			return {
				tags:[],
				filterInput: '',
			}
		},
		methods: {
			fetchTags: function(){
				this.$http.get('http://slim.amicloud.me/public/api/tags')
					.then(function(response){
						this.tags = response.data;
						console.log(this.tags);
					});
			}
		},
		computed: {
			filterByTag: function(){
				return this.tags.filter((tag)=>{
					return tag.label_name.match(this.filterInput);
				});
			}
		}
	}
</script>