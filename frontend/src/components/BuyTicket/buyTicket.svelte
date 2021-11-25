<script>
    import { link } from 'svelte-spa-router';
    
    let masterCard = '../assets/masterCard.png';
    let visaCard = '../assets/visa.png';
    let americanExpress = '../assets/american-express.png';

    export let buttonText;
    export let showUserInfo = false;
    export let walletPageButton = false;

</script>

<main>
    <div class="d-flex flex-row justify-content-center">
        
        {#if showUserInfo}
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
                <button type="button" class="btn btn-success fs-5" id="userButton">{buttonText}</button>
            </div>
        </div>
        {/if}
        
        <div class="space p-3"></div>
        <div class="card text-dark bg-light mb-3" id="cardInfo">
            <div class="card-header">Ödeme Bilgileri</div>
            <div class="">
                <div class="card-body d-flex flex-row justify-content-around">
                    <img src={masterCard} alt="">
                    <img src={visaCard} alt="">
                    <img src={americanExpress} alt="">
                </div>
                <div class="card-body d-flex flex-column" style="width: 90%;">
                    <label for="cardNo">Kart Numarası</label>
                    <input type="number" id="cardNo" placeholder="•••• •••• •••• ••••" maxlength="16" required>
                </div>
                <div class="card-body d-flex flex-column" style="width: 90%;">
                    <label for="cardUserInfo">Kart Üzerindeki İsim</label>
                    <input type="text" id="cardUserInfo" placeholder="Kart sahibinin adı ve soyadı" required>
                </div>
                <div class="card-body d-flex flex-row justify-content-between" style="width: 80%;">
                    <div class="card-body d-flex flex-column">
                        <label for="last">Son Kullanma Tarihi</label>
                        <select name='expireMM' id='expireMM' required>
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
                        <select name='expireYY' id='expireYY' required>
                            <option value=''>Year</option>
                            <option value='21'>2021</option>
                            <option value='22'>2022</option>
                            <option value='23'>2023</option>
                            <option value='24'>2024</option>
                            <option value='24'>2025</option>
                            <option value='24'>2026</option>
                        </select> 
                    </div>
                    <div class="card-body d-flex flex-column" style="width: 40%;">
                        <label for="cvc2">CVC2</label>
                        <input type="number" id="cvc2" placeholder="•••" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="3" required>
                    </div>
                </div>
                {#if walletPageButton}
                    <div class="card-body d-flex flex-column" style="width: 90%;">
                        <label for="money">Yüklenecek Tutar</label>
                        <input type="number" placeholder="örnek: 100" id="money" required>
                    </div>
                {/if}
                <div class="form-check ms-5 mb-5 me-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required>
                    <label class="form-check-label" for="flexCheckDefault">
                        <a href="/obfPage" use:link><b>Ön Bilgilendirme Formu'nu</b></a>, <a href="/mssPage" use:link><b>Mesafeli Satış Sözleşmesi'ni</b></a> okudum ve onaylıyorum.
                    </label>
                </div>
            </div>
            {#if walletPageButton}
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <button type="button" class="btn btn-success btn-sm mb-3" style="width: 20%; height: 4vh;">TL Yükle</button>
                </div>
            {/if}
        </div>
    </div>
</main>

<style>
    #cardInfo {
        width: 45%;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    #userButton {
        width: 30%;
        height: 8vh;
    }

    #passengerInfo {
        width: 45%;
    }
</style>