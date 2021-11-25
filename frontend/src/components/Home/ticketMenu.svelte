<script>
    import { push } from 'svelte-spa-router';

    let showCard = false;
    let isActive = true;

    const selectCard = () => {
        showCard = !showCard;
        isActive = !isActive;
    }

    let busIcon = '../assets/bus.png';
    let planeIcon = '../assets/airplane.png';
    
</script>

<main>
    <div class="ticketsection">
        <div class="searchbox">
            <div class="buttons">
                <button on:click={selectCard} class:active={isActive}><img src={busIcon} alt="">Otobüs</button>
                <button on:click={selectCard} class:active={!isActive}><img src={planeIcon} alt="">Uçak</button>
            </div>
            <ul>
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
                            <button type="button" class="btn btn-dark mt-4 p-3 fs-4" id="button" on:click={() => push('/planeTicketListPage')}>Uçak Bileti Bul</button>
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
                            <button type="button" class="btn btn-dark mt-4 p-3 fs-4" id="button" on:click={() => push('/busTicketListPage')}>Otobüs Bileti Bul</button>
                        </form>
                    </div>
                </li>
                {/if}
            </ul>
        </div>
    </div>
</main>

<style>
    .ticketsection {
        background-image: url("../assets/mainPageBG.png");
        background-repeat: no-repeat;
        background-size: 100% 1000px;
        display: flex;
        justify-content: center;
    }

    .searchbox {
        height: 800px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
        margin-right: 21vh;
    }

    .buttons button {
        background-color: rgba(255, 255, 255, 0.5);
    }

    .buttons .active {
        background-color: rgba(255, 255, 255, 1);
        border: none;
    }
</style>