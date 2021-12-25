<script>
    import { link } from 'svelte-spa-router';
 
 </script>
 
 <main>
     <div class="card-group">
         <div class="card ">
          <a href="/campaign1Page" use:link> <img src="../assets/campaign1.jpg" class="card-img-center" alt="..."> </a>
         </div>
         <div class="card">
          <a href="/campaign2Page" use:link><img src="../assets/campaign2.jpg" class="card-img-center" alt="..."> </a>
         </div>
         <div class="card">
          <a href="/campaign3Page" use:link> <img src="../assets/campaign3.jpg" class="card-center" alt="..."> </a>
         </div>
       </div>
 </main>
 
 <style>
   .card{
      cursor: pointer;    
      border: none;
        }
   a{
     margin-left: 5px;
   }
 </style>