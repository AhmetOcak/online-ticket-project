<script>
    let showCard = false;

    const selectBus = () => {
        showCard = true;
    }

    const selectPlane = () => {
        showCard = false;
    }
</script>

<main>
    <div class="ticketsection">
        <div class="searchbox">
            <ul>
                <li class="buttons">
                    <button on:click={selectBus}>Otobüs</button>
                    <button on:click={selectPlane}>Uçak</button>
                    {#if showCard}
                <li>
                    <div class="card">
                        <form class="form fs-5">
                            <label for="kalkis" class="fs-4 pb-1"><i class="bi bi-geo-alt-fill p-1"></i>Kalkış Noktası</label>
                            <select id="kalkis" class="py-3 mb-3" >
                                <option value="veritabanı">veritabanı</option>
                                <option value="veritabanı">veritabanı</option>
                            </select>
                            <label for="varis" class="fs-4 pb-1"><i class="bi bi-geo-alt-fill p-1"></i>Varış Noktası</label>
                            <select id="varis" class="py-3 mb-3">
                                <option value="veritabanı">veritabanı</option>
                                <option value="veritabanı">veritabanı</option>
                            </select>
                            <label for="tarih" class="fs-4"><i class="bi bi-calendar-fill p-1 pb-1"></i>Yolculuk Tarihi</label>
                            <input type="date" id="tarih" class="p-3">
                            <button type="button" class="btn btn-dark mt-4 p-3 fs-4" id="button">Bilet Bul</button>
                        </form>
                    </div>
                </li>
                {/if}  
                {#if !showCard}
                <li>
                    <div class="card">
                        <form class="form fs-5">
                            <label for="kalkis" class="fs-4 pb-1"><i class="bi bi-geo-alt-fill p-1"></i>Kalkış Noktası</label>
                            <select id="kalkis" class="py-3 mb-3" >
                                <option value="veritabanı">veritabanı</option>
                                <option value="veritabanı">veritabanı</option>
                            </select>
                            <label for="varis" class="fs-4 pb-1"><i class="bi bi-geo-alt-fill p-1"></i>Varış Noktası</label>
                            <select id="varis" class="py-3 mb-3">
                                <option value="veritabanı">veritabanı</option>
                                <option value="veritabanı">veritabanı</option>
                            </select>
                            <label for="tarih" class="fs-4"><i class="bi bi-calendar-fill p-1 pb-1"></i>Yolculuk Tarihi</label>
                            <input type="date" id="tarih" class="p-3">
                            <button type="button" class="btn btn-dark mt-4 p-3 fs-4" id="button">Bilet Bul</button>
                        </form>
                    </div>
                </li>
                {/if}
                </li>
            </ul>
        </div>
    </div>
</main>

<style>
    .ticketsection {
        background-image: url("../assets/busplane.png");
        background-repeat: no-repeat;
        background-size: 100% 800px;
        display: flex;
        justify-content: center;
    }

    .searchbox {
        height: 800px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        width: 450px;
        height: 450px;
        background-color: rgba(255, 255, 255, 0.5);
        justify-content: center;
        padding: 30px;
    }

    .form {
        display: flex;
        flex-direction: column; 
    }

    #button:hover {
        background-color: #000;
        color: #fff;
    }

    li {
        list-style: none;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
</style>