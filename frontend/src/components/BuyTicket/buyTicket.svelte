<script>
    import { link } from 'svelte-spa-router';
    
    let masterCard = '../assets/masterCard.png';
    let visaCard = '../assets/visa.png';
    let americanExpress = '../assets/american-express.png';

    export let buttonText;

</script>

<main>
    <div class="d-flex flex-row justify-content-between">
            <div class="card text-dark bg-light mb-3" id="passengerInfo">
            <div class="card-header">Yolcu Bilgileri</div>
            <div class="">
                <div class="card-body d-flex flex-column">
                    <label for="name">Adı Soyadı</label>
                    <input type="text" id="name" placeholder="Doldurulması zorunludur" required>
                </div>
                <div class="card-body d-flex flex-column">
                    <label for="tc">T.C. Kimlik No</label>
                    <input type="number" id="tc" placeholder="Doldurulması zorunludur" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="11" required>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
                <button type="button" class="btn btn-success fs-5">{buttonText}</button>
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
                    <input type="password" id="cardNo" placeholder="•••• •••• •••• ••••" maxlength="16" required>
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
                        <input type="number" id="cvc2" placeholder="•••" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="3" required>
                    </div>
                </div>
                <div class="form-check ms-5 mb-5 me-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required>
                    <label class="form-check-label" for="flexCheckDefault">
                        <a href="/obfPage" use:link><b>Ön Bilgilendirme Formu'nu</b></a>, <a href="/mssPage" use:link><b>Mesafeli Satış Sözleşmesi'ni</b></a> okudum ve onaylıyorum.
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