<script>
    import Navbar from '../components/Navbar/navbar.svelte';
    import BuyTicket from '../components/BuyTicket/buyTicket.svelte';
</script>

<main>
    <div class="section">
        <Navbar />
        <div class="section1 d-flex flex-row justify-content-around align-items-center pt-5">
            <div class="text-white">
                <h4 class="pt-4">onlinepay</h4>
                <h3>cüzdanım ile hızlı öde hep kazan</h3>
            </div>
            <div class="card text-dark mb-3 mt-4 p-3 d-flex flex-row" style="max-width: 20rem;" id="card">
                <div>
                    <img src="../assets/wallet.png" alt=""> 
                </div>
                <div class="card-body">
                    <h5 class="card-title">Toplam Bakiye</h5>
                    <p class="card-text text-primary fs-2">0.00TL</p>
                </div>
            </div>
        </div>
        <div class="container mt-4">
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="card text-dark bg-light mb-3">
                        <div class="card-body">
                            <h5 class="card-title"><b class="fs-3">Şimdi yükle, hep kazan</b></h5>
                            <p class="card-text fs-4">Kartından hemen yükle, Cüzdanım ile avantajlı alışverişin keyfini çıkart</p>
                            <BuyTicket buttonText="Bakiye Ekle"/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</main>

<style>
    .section {
        width: 100%;
        height: 100vh;
        background-image: url("../assets/walletBG.png");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }

    .section1 {
        background-image: linear-gradient(to right, rgb(15, 12, 41, 0.9), rgb(48, 43, 99, 0.9), rgb(36, 36, 62, 0.9));
        width: 100%;
        height: 30vh;
    }

    #card {
        background-color: #F4F6FF;
    }
</style>