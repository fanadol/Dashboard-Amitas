<template>
	<section class="section">
         <div class="container" style="width: 900px">
            <div class="column">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                     <li><a href="threads.html">Threads</a></li>
                     <li class="is-active"><a href="#" aria-current="page">Detail Thread</a></li>
                  </ul>
               </nav>
               <!-- form -->
               <div class="box">
                  <p class="title is-3">Detail Thread</p>
                  <div class="content">
                     <div class="field">
                        <label class="label">Title</label>
                        <div class="control">           
                           <input class="input" type="text" v-model="thread.title" readonly>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Tag</label>
                        <div class="control has-icons-left">           
                           <input class="input" type="text" v-model="thread.label_name" readonly>
                           <span class="icon is-small is-left">
                           <i class="fa fa-tag"></i>
                           </span>
                        </div>
                     </div>
                     <div class="field">
                        <label class="label">Description</label>
                        <div class="control">           
                           <textarea class="textarea" readonly="" v-model="thread.content_text"></textarea>
                        </div>
                     </div>
                         </div>                     
                     <div class="field">
                        <label class="label">Image Uploaded</label>
                        <div class="control">           
                           <figure class="image">
                             <img src="https://www.beritateknologi.com/wp-content/uploads/2017/12/Redmi-5-Plus-gold.jpg">
                           </figure>
                        </div>
                     </div>
                     <br>
                     <div class="field is-grouped">
                        <div class="control">
                           <a href="thread_edit.html" class="button is-info">
                           <span class="icon">
                           <i class="fa fa-pencil"></i>
                           </span>
                           <span>Edit</span>
                           </a>
                        </div>
                        <div class="control">
                           <a href="threads.html" class="button">
                           <span>Go Back</span>
                           </a>
                        </div>
                     </div>
               </div>
            </div>
         </div>
      </section>
</template>

<script>
  export default{
    name: 'thread_view',
    data(){
      return{
        thread:{}
      }
    },
    methods: {
      fetchThread: function(id){
        this.$http.get('http://slim.amicloud.me/public/api/thread/'+id)
              .then(function(response){
                this.thread = response.body;
                console.log(this.thread);
      });
      }
    },
    created: function(){
      this.fetchThread(this.$route.params.post_id);
    }
  }
</script>