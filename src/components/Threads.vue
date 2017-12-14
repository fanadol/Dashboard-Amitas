<template>
	<section class="section">
         <div class="container">
            <div class="columns">
               <div class="column is-one-third is-left">
                  <h1 class="title">1 Threads</h1>
               </div>
               <div class="column">
                  <div class="field is-grouped is-grouped-right">
                     <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Search Title" v-model="filterInput">
                        <span class="icon is-left">
                        <i class="fa fa-search"></i>
                        </span>                
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
                              <th>No</th>
                              <th>Title</th>
                              <th>Tag</th>
                              <th>Created on</th>
                              <th>Author</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody v-for="thread in filterByTitle">
                           <tr>
                              <td>{{thread.post_id}}</td>
                              <td>{{thread.title}}</td>
                              <td>{{thread.label_name}}</td>
                              <td>{{thread.date}}</td>
                              <td>{{thread.user_id.name}}</td>
                              <td>
                                 <div class="field">
                                    <router-link :to="'/thread/detail/'+ thread.post_id" class="button modal-button">
                                       <span class="icon">
                                       <i class="fa fa-eye"></i>
                                       </span>
                                       <span>View</span>
                                    </router-link>
                                    <router-link :to="'/thread/edit/'+ thread.post_id" class="button is-info modal-button">
                                       <span class="icon">
                                       <i class="fa fa-pencil"></i>
                                       </span>
                                       <span>Edit</span>
                                    </router-link>
                                    <router-link :to="' thread/delete/' + thread.post_id" class="button is-danger modal-button">
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
	export default{
		name: 'thread',
		data(){
			return {
				threads: [],
				filterInput: '',
			}
		},
		methods: {
         fetchThreads: function(){
            this.$http.get('http://slim.amicloud.me/public/api/thread')
            .then(function(response){
               this.threads = response.data;
               console.log(this.threads);
            }, function(error){
               console.log(error.statusText);
            });            
         }
        },
        computed: {
         filterByTitle: function(){
            return this.threads.filter((thread) => {
               return thread.title.match(this.filterInput);
            });
         }
      	},

        created: function(){
        	this.fetchThreads();
        }

	}
</script>