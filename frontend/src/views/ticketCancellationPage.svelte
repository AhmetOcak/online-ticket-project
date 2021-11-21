<script>
    import Navbar from "../components/Navbar/navbar.svelte";
</script>

<main>
    <div class="section">
        <Navbar />
        <div class="card ds-flex flex-column justify-content-center">
            <div class="ticketID d-flex flex-column pb-3 fs-4">
                <label for="bid" class="fs-4 ms-3">Bilet ID</label>
                <input type="text" id="bid" class="input">
            </div>
            <div class="userName d-flex flex-column">
                <label for="un" class="fs-4 ms-3">User Name</label>
                <input type="text" id="un" class="input fs-4">
            </div>
            <div class="button d-flex flex-row-reverse p-4">
                <button type="button" class="btn btn-danger fs-4 p-3">İptal Et</button>
            </div>
        </div>
    </div>
</main>

<style>
    .section{
        background-image: url("../assets/ticketcancelbg.png");
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .card {
        width: 30%;
        height: 30vh;
        background-color: rgb(255, 255, 255, 0.7);
    }

    .input {
        border: 0;
        background-color: rgb(255, 255, 255, 0.0);
        border-bottom: 1px solid #9fa1a3;
        margin: 0 25px 0 15px;
    }

    input:focus {
        outline: 0;
    }

</style>