<script>
    let image = './assets/busplane.png';
</script>

<main>
    <div class="ticketsection">
        <div class="searchbox">
            <div class="card">
                <form class="form">
                    <label for="kalkis">Kalkış Noktası</label>
                    <select id="kalkis" class="py-3 mb-3">
                        <option value="veritabanı">veritabanı</option>
                        <option value="veritabanı">veritabanı</option>
                    </select>
                    <label for="varis">Varış Noktası</label>
                    <select id="varis" class="py-3 mb-3">
                        <option value="veritabanı">veritabanı</option>
                        <option value="veritabanı">veritabanı</option>
                    </select>
                    <label for="tarih">Yolculuk Tarihi</label>
                    <input type="date" id="tarih" class="p-3">
                    <button type="button" class="btn btn-dark mt-4 p-3">Bilet Bul</button>
                </form>
            </div>
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
        width: 400px;
        height: 400px;
        background-color: #fff;
        justify-content: center;
        padding: 30px;
    }

    .form {
        display: flex;
        flex-direction: column; 
    }
</style>