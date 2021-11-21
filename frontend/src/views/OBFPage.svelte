<script>
    import Navbar from '../components/Navbar/navbar.svelte';
</script>

<main>
    <div class="section d-flex justify-content-center align-items-center">
        <Navbar />
        <div class="textSection">

        </div>
    </div>
</main>

<style>
    .section{
        width: 100%;
        height: 100vh;
        background-image: url("../assets/agreementBG.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .textSection {
        margin-top: 100px;
        overflow: auto;
        width: 70%;
        height: 80vh;
        background-color: rgb(255, 255,255, 1);
    }
</style>