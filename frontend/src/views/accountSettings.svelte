<script>
    import Navbar from "../components/Navbar/navbar.svelte";



</script>
<main>
    <Navbar/>
    <div class="section">
        <div class="text_hesap"><h1>Hesap Ayarları</h1></div>
        <div class="hesap">
          <div class="profile_tabShow">
            <h2>Ad Soyad</h2>
            <input type="text" class="input" value="Emre Yılmaz" placeholder="AD SOYAD" />
            <h2>E-mail</h2>
            <input type="text" class="input" value="emre@hotmail.com" />
            <h2>Doğum Tarihi</h2>
            <input type="date" class="input" value="14,04,2000" />
            <h2>TC Kimlik No</h2>
            <input type="text" class="input" value="14725836945" />
            <h2>Cep Telefonu</h2>
            <input type="text" class="input" value="05398524578" />
            <h2>Şehir</h2>
            <input type="text" class="input" value="Antalya" />
            <button class="btn">Güncelle</button>
          </div>
        </div>
        <div class="sifre_islemleri_text">
          <h2>Şifre İşlemleri</h2>
        </div>
        <div class="sifre_islemleri">
          <h2>Eski Şifre</h2>
          <input type="password" class="input_sifre" value="cuma" />
          <h2>Yeni Şifre</h2>
          <input type="password" class="input_sifre" value="persembe" />
          <h2>Yeni Şifre(Tekrar)</h2>
          <input type="password" class="input_sifre" value="persembe" />
          <button class="btn_sifre">Şifreyi Değiştir</button>
          <h3 id="deleteAccount">Üyeliğimi Silmek İstiyorum</h3>
        </div>
    </div>
</main>
<style>

#deleteAccount:hover{
    color: red;
}


.section{
    width: 100%;
    height: 170vh;
    background-image: url("../assets/1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
    body {
  font-family: "Roboto", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.text_hesap {
  text-align: left 10px;
  text-shadow: 1px 1px rgb(56, 56, 56);
  width: auto;
  height: 900px;
  position: absolute;
  left: 430px;
  top: 130px;
  right: 30px;
  color: white;
  margin-bottom: 30px;
}
.hesap {
  background: rgb(255, 255, 255,0.7);
  border-radius: 3px;
  box-shadow: 0 0 20px 9px #44403e1f;
  margin: 30px;
  width: auto;
  height: 1050px;
  position: absolute;
  top: 160px;
  left: 400px;
  right: 400px;
  position: absolute;
}
.profile_tabShow {
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: 0 0 20px 9px #44403e1f;
  margin-left: 50px;
  margin-right: 50px;
  width: 1000px auto;
  height: 410px;
  position: absolute;
  top: 5px;
  left: 10px;
  right: 30px;
  position: absolute;
  column-count: 2;
  margin-top: 50px;
  margin-right: 20px;
}
.hesap h2 {
  color: #777;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 40px;
}
.input,
p {
  border: 0;
  border-bottom: 1px solid #042331;
  width: 80%;
  font-family: "montserrat", sans-serif;
  font-size: 20px;
  padding: 7px;
  margin-left: 40px;
  margin-right: 70px;
  outline: none;
}
.btn{
  font-family: "roboto", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  border: 0;
  color: #fff;
  background: #9ab3f8;
  padding: 7px 15px;
  box-shadow: 0px 2px 4px 0px;
  cursor: pointer;
  margin-top: 50px;
  margin-left: 50px;
  right: 700px;
  top: 300px;
  position: absolute;
}

/* ****************************************************** SİFRE İSLEMLERİ */
.sifre_islemleri_text {
  text-align: center;
  text-shadow: 1px 1px rgb(245, 240, 240);
  width: auto;
  height: 900px;
  position: absolute;
  left: 400px;
  top: 680px;
  right: 850px;
  color: rgb(0, 0, 0);
}

.sifre_islemleri {
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: 0 0 20px 9px #44403e1f;
  text-align: left;
  margin: 30px;
  margin-left: 80px;
  margin-right: 80px;
  width: auto;
  height: 420px;
  position: absolute;
  top: 700px;
  left: 410px;
  right: 400px;
  position: absolute;
}
.sifre_islemleri h2 {
  color: #777;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 40px;
}
.sifre_islemleri h3 {
  color: #777;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;
  text-align: right;
  margin-right: 120px;
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 700px;
}
.input_sifre {
  border: 0;
  border-bottom: 1px solid #042331;
  width: 40%;
  font-family: "montserrat", sans-serif;
  font-size: 20px;
  padding: 7px;
  margin-left: 40px;
  margin-right: 70px;
  outline: none;
}
.btn_sifre {
  font-family: "roboto", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  border: 0;
  color: #fff;
  background: #9ab3f8;
  padding: 7px 15px;
  box-shadow: 0px 2px 4px 0px;
  cursor: pointer;
  margin-top: 50px;
  margin-left: 50px;
  right: 700px;
  top: 300px;
  position: absolute;
}


</style>