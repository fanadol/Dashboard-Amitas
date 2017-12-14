<template>
	<section class="section">
         <div class="container" style="width: 900px">
            <div class="column">
                  <nav class="breadcrumb" aria-label="breadcrumbs">
                     <ul>
                        <li><a href="index.html">Users</a></li>
                        <li class="is-active"><a href="#" aria-current="page">New User</a></li>
                     </ul>
                  </nav>
                  <!-- form -->
                  <form v-on:submit="addCustomer">
                  <div class="box">
                  <div class="content">
                     <p class="title is-3">Add New User</p>
                     <div class="field">
                        <label class="label">Upload Profile Photo</label>
                        <div class="file has-name is-fullwidth">
                           <label class="file-label">
                           <input class="file-input" type="file" name="resume">
                           <span class="file-cta">
                           <span class="file-icon">
                           <i class="fa fa-upload"></i>
                           </span>
                           <span class="file-label">
                           Choose a photo…
                           </span>
                           </span>
                           <span class="file-name">
                           </span>
                           </label>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">User ID</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" placeholder="NIM" v-model="usr.user_id">
                           <span class="icon is-small is-left">
                              <i class="fa fa-user"></i>
                            </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">User Full Name</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" placeholder="Full Name" v-model="usr.name">
                           <span class="icon is-small is-left">
                              <i class="fa fa-user"></i>
                            </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Prodi</label>
                        <div class="control is-expanded">
                           <div class="select is-fullwidth">
                              <select v-model="selected_prodi">
                                 <option disabled value="">- Select One -</option>
                                 <option>Teknik Informatika</option>
                                 <option>Sistem Informasi</option>
                                 <option>Manajemen Informatika</option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Role</label>
                        <div class="control is-expanded">
                           <div class="select is-fullwidth">
                              <select v-model="selected_role">
                              	 <option disabled value="">- Select One -</option>
                                 <option>Member</option>
                                 <option>UKM</option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Social Link</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" placeholder="Facebook" v-model="social_link">
                           <span class="icon is-small is-left">
                              <i class="fa fa-facebook-square"></i>
                            </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Password</label>
                       <div class="control has-icons-left">           
                           <input class="input" type="text" placeholder="Password" v-model="usr.password">
                           <span class="icon is-small is-left">
                              <i class="fa fa-lock"></i>
                            </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Confirm Password</label>
                         <div class="control has-icons-left">           
                           <input class="input" type="text" placeholder="Confirm Password" v-model="cek_password">
                           <span class="icon is-small is-left">
                              <i class="fa fa-lock"></i>
                            </span>
                        </div>
                     </div>
                     <br>
                     <div class="field is-grouped">
                        <div class="control">
                           <button class="button is-success" type="submit">
                           <span class="icon">
                           <i class="fa fa-paper-plane"></i>
                           </span>
                           <span>Submit</span>
                           </button>
                        </div>
                        <div class="control">
                           <a href="index.html" class="button is-light">
                           <span>Cancel</span>
                           </a>
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
		name: 'add',
		data(){
			return{
				usr:{},
				selected_prodi: '',
				selected_role: '',
				cek_password: '',
				social_link: ''
			}
		},
		methods: {
			addCustomer: function(e){
				if(!this.usr.name || !this.usr.password || !this.selected_prodi || !this.selected_role){
					console.log('Please fill in all required fields!');
				} else if(this.usr.password!=this.cek_password) {
					console.log('Password doesnt match');
				} else {
					let NewUser = {
						user_id: this.usr.user_id,
						name: this.usr.name,
						prodi: this.selected_prodi,
						status: this.selected_role,
						social_link: this.usr.social_link,
						password: this.usr.password
					}

					this.$http.post('http://slim.amicloud.me/public/api/user/add', NewUser)
					.then(function(response){
						this.$router.push({path: '/'});
					},
					function(error){
						console.log(error.statusText);
					});
					e.preventDefault();
				}
				e.preventDefault();
			}
		}
	}
</script>