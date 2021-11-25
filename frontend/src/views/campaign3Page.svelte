<script>
    import Navbar from '../components/Navbar/navbar.svelte';

</script>

<main>
    <div class="section d-flex justify-content-center align-items-center ">

    <Navbar />

        <div class="blog">
            <h2>THY ile İndirim Fırsatı</h2>
    
            <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptates officia tempora doloremque hic consequuntur, veniam voluptas quidem at odit iure nam voluptate quae quis? Commodi illum tempora placeat, ex molestias voluptatum ut consequuntur laborum ad, vitae soluta reiciendis a non veniam distinctio magnam eos quis ducimus optio officiis. Repellat eum quaerat quo, earum totam officia, commodi, animi consequatur possimus nam quas sequi omnis tempore beatae consequuntur aliquam enim dolorum voluptatum iusto sunt necessitatibus asperiores. Laboriosam asperiores quam natus sequi illo sunt! Sequi, ad. Autem, aperiam perspiciatis! Voluptate doloremque, enim quibusdam omnis amet ad velit dolorum vero labore esse libero?
            </p>
    
    
        </div>
    </div>

</main>

<style>
.section{
        width: 100%;
        height: 100vh;
        background-image: url("../assets/Campaign3 PageBG.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;
}

.blog{
    background-color: #C1B6B0;
    width: 90%;
    border: 5px solid #29221B;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 20px;
    margin: 200px ;
    max-width: 700px;
}

.paragraph{
    padding-left: 5px;
}

h2{
    font-size: 2.0rem;
    color: #FE0000;
}


</style>