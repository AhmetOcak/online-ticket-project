<script>
    let masterCard = '../assets/masterCard.png';
    let visaCard = '../assets/visa.png';
    let americanExpress = '../assets/american-express.png';
</script>

<main>
    <div class="d-flex flex-row justify-content-between">
        <div class="card text-dark bg-light mb-3" id="passengerInfo">
            <div class="card-header">Yolcu Bilgileri</div>
            <div class="">
                <div class="card-body d-flex flex-column">
                    <label for="name">Adı Soyadı</label>
                    <input type="text" id="name" placeholder="Doldurulması zorunludur">
                </div>
                <div class="card-body d-flex flex-column">
                    <label for="tc">T.C. Kimlik No</label>
                    <input type="number" id="tc" placeholder="Doldurulması zorunludur">
                </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
                <button type="button" class="btn btn-success fs-5">Ödeme Yap</button>
            </div>
        </div>
        <div class="space p-3"></div>
        <div class="card text-dark bg-light mb-3" id="cardInfo">
            <div class="card-header">Ödeme Bilgileri</div>
            <div class="">
                <div class="card-body d-flex flex-row justify-content-around">
                    <img src={masterCard} alt="">
                    <img src={visaCard} alt="">
                    <img src={americanExpress} alt="">
                </div>
                <div class="card-body d-flex flex-column">
                    <label for="cardNo">Kart Numarası</label>
                    <input type="password" id="cardNo" placeholder="•••• •••• •••• ••••">
                </div>
                <div class="card-body d-flex flex-row justify-content-between">
                    <div class="card-body d-flex flex-column">
                        <label for="last">Son Kullanma Tarihi</label>
                        <select name='expireMM' id='expireMM'>
                            <option value=''>Month</option>
                            <option value='01'>January</option>
                            <option value='02'>February</option>
                            <option value='03'>March</option>
                            <option value='04'>April</option>
                            <option value='05'>May</option>
                            <option value='06'>June</option>
                            <option value='07'>July</option>
                            <option value='08'>August</option>
                            <option value='09'>September</option>
                            <option value='10'>October</option>
                            <option value='11'>November</option>
                            <option value='12'>December</option>
                        </select> 
                        <select name='expireYY' id='expireYY'>
                            <option value=''>Year</option>
                            <option value='21'>2021</option>
                            <option value='22'>2022</option>
                            <option value='23'>2023</option>
                            <option value='24'>2024</option>
                            <option value='24'>2025</option>
                            <option value='24'>2026</option>
                        </select> 
                    </div>
                    <div class="card-body d-flex flex-column">
                        <label for="cvc2">CVC2</label>
                        <input type="number" id="cvc2" placeholder="•••">
                    </div>
                </div>
                <div class="form-check ms-5 mb-5 me-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        <a href="#"><b>Ön Bilgilendirme Formu'nu</b></a>, <a href="#"><b>Mesafeli Satış Sözleşmesi'ni</b></a> okudum ve Covid-19 açısından güvenli olduğumu onaylıyorum.
                    </label>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    #passengerInfo {
        width: 45%;
    }

    #cardInfo {
        width: 45%;
    }

    .btn {
        width: 30%;
        height: 8vh;
    }

    a{
        text-decoration: none;
        color: #000;
    }
</style>