<template>
	<section class="section" id="edit">
         <div class="container" style="width: 900px">   
            <!--v for drop here-->       
            <div class="column">
                  <nav class="breadcrumb" aria-label="breadcrumbs">
                     <ul>
                        <li><a href="index.html">Users</a></li>
                        <li class="is-active"><a href="#" aria-current="page">Edit User</a></li>
                     </ul>
                  </nav>
                  <!-- form -->
                  <form v-on:submit="validationUpdateUser">
                  <div class="box">
                     <p class="title is-3">Edit User</p>
                     <div class="field">
                        <div class="control">
                           <label class="label">Profile Photo</label>
                           <figure class="image is-96x96">
                              <img :src="user.user_photo">
                           </figure>
                           <br>
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
                     </div>
                  <div class="content">                     
                     <div class="field">
                        <label class="label">Name</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="user.name">
                           <span class="icon is-small is-left">
                              <i class="fa fa-user"></i>
                            </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Prodi</label>
                        <div class="control is-expanded">
                           <div class="select is-fullwidth">
                              <select v-model="user.prodi">
                                 <option v-for="option in prodis" :value="option.value" :is-selected="option.value == 'user.prodi'">
                                   {{option.value}}
                                 </option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Role</label>
                        <div class="control is-expanded">
                           <div class="select is-fullwidth">
                              <select v-model="user.status">
                                 <option v-for="status in Role" :value="status.value" :is-selecetd="status.value == 'user.status'">
                                  {{status.value}}
                                 </option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Social Link</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="user.social_link">
                           <span class="icon is-small is-left">
                              <i class="fa fa-facebook-square"></i>
                            </span>
                        </div>
                     </div>
                     <hr>
                     <div class="field">
                        <label class="label">Password</label>
                       <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="user.password">
                           <span class="icon is-small is-left">
                              <i class="fa fa-lock"></i>
                            </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">New Password</label>
                       <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="new_password">
                           <span class="icon is-small is-left">
                              <i class="fa fa-lock"></i>
                            </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Confirm Password</label>
                         <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="confirm_new_password">
                           <span class="icon is-small is-left">
                              <i class="fa fa-lock"></i>
                            </span>
                        </div>
                     </div>
                     <br>
                     <div class="field is-grouped">
                       <div class="control">
                           <button type="submit" class="button is-success"><span class="icon">
                           <i class="fa fa-floppy-o"></i>
                           </span>
                           <span>Save Changes</span>
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
               </form>
            </div>
         </div>
      </section>
</template>

<script>
	export default{
		name: 'edit',
		data(){
			return{
				user:{},
        prodis:[
          {value : 'Teknik Informatika'},
          {value : 'Sistem Informasi'},
          {value : 'Manajemen Informatika'}
        ],
        Role:[
          {value: 'Member'},
          {value: 'UKM'}
        ],
        social_link: null,
        new_password: null,
        confirm_new_password: '',
        user_photo: 'http://www.canterbury.ac.nz/media/images/people/Default-Staff-Profile-Image-Placeholder_6881327390178250815.jpg'
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
      validateNewPassword:function(){
        if(this.new_password!=null){
          if(this.new_password != this.confirm_new_password){
          console.log('Password doesnt match!');
          } else{
          this.user.password = this.new_password;
        }
        } else {
          this.user.password = this.user.password;
        }
      },
      updateUser:function(){
          let updUser = {
            user_id: this.user.user_id,
            name: this.user.name,
            prodi: this.user.prodi,
            status: this.user.status,
            social_link: this.user.social_link,
            password: this.user.password,
            user_photo: this.user_photo
          }

          this.$http.put('http://slim.amicloud.me/public/api/user/update/'+ this.$route.params.user_id, updUser)
            .then(function(response){
              console.log('User Updated');
              this.$router.push({path: '/'});
          });
      },
      validationUpdateUser: function(){
        if(!this.user.name || !this.user.password || !this.user.prodi || !this.user.status){
          console.log('Please Fill in all required fields');
        } else if(this.new_password!=null){
            if(this.new_password != this.confirm_new_password){
              console.log('Password doesnt match!');
            } else{
          this.user.password = this.new_password;
          this.updateUser();
            }
          } 
          else {
          this.updateUser();
        }
      }
		},
		created: function(){
			this.fetchUser(this.$route.params.user_id);
		}
	}
</script>