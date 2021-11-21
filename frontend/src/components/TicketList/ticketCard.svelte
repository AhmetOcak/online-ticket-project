<script>
    export let companyName;
    export let departureTime;
    export let durationTime;
    export let arrivalTime;
    export let price;
</script>

<main>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header fs-4">{companyName}</div> <!-- Şirket ismi -->
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
            <button type="button" class="btn btn-dark">Seç</button>
        </div>
    </div>
</main>

<style>
    p{
        font-size: 20px;
    }

    button {
        width: 80px;
        border-top-right-radius: 100%;
        border-bottom-right-radius: 100%;
    }
</style>