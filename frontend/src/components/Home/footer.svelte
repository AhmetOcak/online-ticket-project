<script>
    import { link } from 'svelte-spa-router';
</script>

<main>
    <div class="mt-5 pt-5 pb-5 footer bg-dark text-white">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-xs-12">
                    <h2>Online Bilet Sitesi</h2>
                    <p class="pr-5 text-white-50">Türkiye'nin en güvenilir uçak ve bilet sitesi. </p>
                    <p>
                        <a href="/faqPage" use:link ><i>Sıkça Sorulan Sorular</i></a>
                        <br>
                        <a href="/helpPage" use:link><i>Yardım</i></a>
                        <br>
                        <a href="/customerServicePage" use:link><i>Müşteri Hizmetleri</i></a>
                    </p>
                </div>
                <div class="col-lg-3 col-xs-12">
                    <h4 class="mt-lg-0 mt-sm-3">Bizi takip edin</h4>
                        <ul class="m-0 p-0">
                        <li>- <a href="https://www.facebook.com/" target="blank">Facebook</a></li>
                        <li>- <a href="https://www.instagram.com/" target="blank">İnstagram</a></li>
                        <li>- <a href="https://twitter.com/login?lang=tr" target="blank">Twitter</a></li>
                        <li>- <a href="https://web.telegram.org/" target="blank">Telegram</a></li>
                        <li>- <a href="https://web.bip.com/" target="blank">Bip</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-xs-12">
                    <h4>Adres ve İletişim</h4>
                    <p class="text-white-50">Isparta Merkez, Türkiye</p>
                    <p class="mb-1 text-white-50"><i class="bi bi-telephone-fill text-white"></i> 0850 555 55 55</p>
                    <p class="text-white-50"><i class="bi bi-envelope-fill text-white"></i> info@onlinebilet.com</p>
                </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <p class=""><small class="text-white-50">© 2021. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </div>
</main>

<style>
    a {
        color: #909294;
        text-decoration: none;
    }
    
    a:hover {
        color: #fff;
    }
</style>