<!-- Ahmet Ocak -->
<script>
    import { push } from "svelte-spa-router";

    export let companyName;
    export let departureTime;
    export let durationTime;
    export let arrivalTime;
    export let price;
    export let pushPage;
    export let departurePlace;
    export let arrivalPlace;
    export let showButton = false;
    export let cancelTheTicket = false;
</script>

<main>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header fs-4 d-flex flex-row justify-content-between">
            {companyName}
            {#if cancelTheTicket}
                <button type="button" class="btn btn-danger p-3 fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Bileti iptal et</button>
            {/if}
        </div>
        <div class="card-body d-flex flex-row justify-content-between">
            <div class="d-flex align-item-center">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h4>Kalkış</h4>
                    <p>{departureTime}</p>
                </div>
            </div>
            <div class="d-flex align-item-center">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h4>Süre</h4>
                    <p>{durationTime}</p>
                </div>
            </div>
            <div class="d-flex align-item-center">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h4>Varış</h4>
                    <p>{arrivalTime}</p>
                </div>
            </div>
            <div class="d-flex align-item-center">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h4>Fiyat</h4>
                    <p>{price}</p>
                </div>
            </div>
            {#if showButton} 
                <button type="button" class="btn btn-dark" id="pushButton" on:click={() => push(pushPage)}>Seç</button>
            {/if}
        </div>
        {#if cancelTheTicket}
            <div class="d-flex flex-row justify-content-between ms-3 me-3">
                <div class="d-flex flex-column justify-content-center align-item-center">
                    <h4>Kalkış Yeri</h4>
                    <p>{departurePlace}</p>
                </div>
                <div class="d-flex flex-column justify-content-center align-item-center">
                    <h4>Varış Yeri</h4>
                    <p>{arrivalPlace}</p>
                </div>
            </div>
        {/if}
    </div>
</main>

<style>
    p{
        font-size: 20px;
    }

    #pushButton {
        width: 80px;
        border-top-right-radius: 100%;
        border-bottom-right-radius: 100%;
    }
</style>