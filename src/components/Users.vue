<template>
	<div id="users">
      <section class="section">
         <div class="container">
            <div class="columns">
               <div class="column is-one-third is-left">
                  <h1 class="title">2 User</h1>
               </div>
               <div class="column">
                  <div class="field is-grouped is-grouped-right">
                     <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Search NIM" v-model="filterInput">
                        <span class="icon is-left">
                        <i class="fa fa-search"></i>
                        </span>                
                     </p>
                     <p class="control">
                        <router-link to="/user/add" class="button is-success">
                           <span class="icon">
                           <i class="fa fa-plus"></i>
                           </span>
                           <span>New User</span>
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
                              <th>Name</th>
                              <th>Prodi</th>
                              <th>Role</th>
                              <th>Join Date</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody v-for="user in filterByNim">
                           <tr>
                              <td>{{user.user_id}}</td>
                              <td>{{user.name}}</td>
                              <td>{{user.prodi}}</td>
                              <td>{{user.status}}</td>
                              <td>{{user.join_date}}</td>
                              <td>
                                 <div class="field">
                                    <router-link :to="'/user/detail/'+ user.user_id" class="button modal-button">
                                       <span class="icon">
                                       <i class="fa fa-eye"></i>
                                       </span>
                                       <span>View</span>
                                    </router-link>
                                    <router-link :to="'/user/edit/'+ user.user_id" class="button is-info modal-button">
                                       <span class="icon">
                                       <i class="fa fa-pencil"></i>
                                       </span>
                                       <span>Edit</span>
                                    </router-link>
                                    <router-link :to="'/user/delete/' + user.user_id" class="button is-danger modal-button">
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
   </div>
</template>


<script>
	export default {
		name : 'users',
		data(){
			return {
				users:[],
            filterInput: ''
			}
		},
      methods: {
         fetchUsers: function(){
            this.$http.get('http://slim.amicloud.me/public/api/user')
            .then(function(response){
               this.users = response.data;
               console.log(this.users);
            }, function(error){
               console.log(error.statusText);
            });            
         }
      },
      //filter only can be used on empty array [], not an object {}
      computed: {
         filterByNim: function(){
            return this.users.filter((user) => {
               return user.user_id.match(this.filterInput);
            });
         }
      },
		created: function(){
         this.fetchUsers();
		}
	}
</script>