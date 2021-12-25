<!-- Ahmet Ocak -->
<script>
    import Navbar from '../components/Navbar/navbar.svelte';
</script>

<main>
    <div class="section d-flex justify-content-center align-items-center">
        <Navbar />
        <div class="textSection">
            <h3>ÖN BİLGİLENDİRME FORMU</h3>
            <h5 class="text-primary">1.SATICIYA AİT BİLGİLER</h5>
            <p>Ünvan: ONLİNE BİLET SATIŞ SİTESİ</p>
            <p>Adres: Isparta Merkez</p>
            <p>Telefon: 0850 555 55 55</p>
            <p>Eposta: info@onlinebilet.com</p>

            <h5 class="text-primary">2.TÜKETİCİYE AİT BİLGİLER</h5>
            <p>Yolcu taşıma biletini satın alım işlemini gerçekleştiren kişi ve kişinin bilgileridir.</p>
            
            <h5 class="text-primary">3.SÖZLEŞME İÇERİĞİ ve ÜRÜN-HİZMET BİLGİLERİ</h5>
            <p>İşbu sözleşme içeriği, yolcu taşıma biletidir. Biletin ücreti, ödeme şekli, biniş yeri, varış yeri, varış saati, 
                yolculuk tarihi ve koltuk numarası bilgilerinden oluşmakta olup, tüketici yani yolcunun e-posta adresine de gönderilmektedir.</p>
            <pre>Açıklama

Tarih                     
                
Saat                      Nereden-Nereye
                
Ödeme biçimi              Toplam Tutar(kdv dahil)
            </pre>

            <h5 class="text-primary">4.GEÇERLİLİK SÜRESİ</h5>
            <p>İşbu sözleşmede yer alan ürün ve hizmetler bahsedilen hizmetin bitimine kadar geçerli olup, hizmet bitimi ardında geçerli olmayacağını sizlerin bilgisine sunarız.</p>
        
            <h5 class="text-primary">5.CAYMA HAKKI</h5>
            <p>
                Tüketici, iade talebi oluşması halinde, sipariş zamanında gönderilmiş e-posta
                içinde belirtilen hareket saatinden 24 saat öncesine kadar cayma hakkına 
                sahiptir. Cayma hakkının kullanılması halinde cayma talebi ardındaki 30 gün 
                içerisinde tüketiciye ücreti iade edilir. Tüketici eğer şubeden bilet satın 
                almışsa, cayma talebi halinde tüketici bu bileti ile birlikte yanında kimlik 
                ve satın alımı kredi kartı ile oldu ise kredi kartı ile birlikte, bilette belirtilen 
                yolculuk saatinden en geç 24 saat önce şubemize müracaat etmesi gerekmektedir. Eğer 
                belirtilen yolculuk saatine 24 saatten az bir süre kalmış ise bilet iadesi yani cayma hakkı kullanılamaz.
            </p>
            
            <h5 class="text-primary">6.GEÇERLİLİK</h5>
            <p>İşbu ön bilgilendirme formu tüketici tarafından dijital ortamda okunarak kabul edilecek, daha sonrasında da tüketici sözleşmesi aşaması başlayacaktır.</p>

            <h5 class="text-primary">7.YETKİLİ MAHKEME</h5>
            <p>Tüketici, şikayeti durumunda Sanayi ve Ticaret Bakanlığının her yılın Aralık ayında, Parasal Sınırlar içinde belirlediği tüketicinin mal veya hizmet satın aldığı 
                yerde ya da bulunduğu bölgede ki tüketici sorunları hakem heyetine veya tüketici mahkemesine yapabilir.* 2016 yılı için geçerlidir.</p>
        
        </div>
    </div>
</main>

<style>
    .section{
        width: 100%;
        height: 100vh;
        background-image: url("../assets/agreementBG.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .textSection {
        margin-top: 100px;
        overflow: auto;
        width: 70%;
        height: 80vh;
        background-color: rgb(255, 255,255, 1);
        padding: 20px;
    }

    p {
        font-size: 15px;
    }
</style>