<script>
import Navbar from "../components/Navbar/navbar.svelte";
</script>

<main>
    <div class="section d-flex justify-content-center align-items-center ">
        <Navbar />

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header " id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sed.
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae modi ab nemo iure asperiores? Maxime ipsa harum voluptatem explicabo quis perspiciatis. Velit assumenda magnam distinctio dignissimos, nesciunt ipsa voluptatum rerum?</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam voluptates ratione, temporibus enim vel.
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus, ipsam similique animi labore velit numquam, error dolor commodi, ab architecto fuga repudiandae at facere aperiam deleniti aliquam. Exercitationem placeat a sapiente necessitatibus sunt atque ut, culpa fuga eius nam?</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis quos esse eveniet dolorum laboriosam nam dicta officiis iusto ipsa?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum illo quaerat eos in! Accusantium sit fuga obcaecati esse magni! Odit eos explicabo amet voluptate tempora at natus inventore quo vel, esse alias repellat repellendus. Possimus, perspiciatis nobis, incidunt fugiat tempora ipsum molestiae esse inventore qui neque dolores doloribus quae?</div>
            </div>
          </div>
        </div>
</div>
</main>

<style>
    .section{
        width: 100%;
        height: 100vh;
        background-image: url("../assets/Announcement PageBG.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        
    }

  .accordion{
    margin-top: 100px;
    width: 70%;
  }

  .accordion-button{
    background-color: #5C5C5C;
    }

  .accordion-item{
    background-color: #c4828a;
  }
 
</style>