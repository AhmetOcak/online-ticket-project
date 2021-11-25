<script>
    import Navbar from "../components/Navbar/navbar.svelte";
    

</script>
<main>
    <Navbar/>
    <div class="text">
        <h1>Rezervasyonlarım</h1>
    </div>
    <div class="section">     
      <div class="box_seyehatlerim">
        <div class="ticket1">
          <div id="gidis" class="  pt-2">
            <h4>Gidiş : 12.01.2022</h4>
            <h1>AAO</h1>
            <h2>Ankara</h2>
            <h3>12:45</h3>
          </div>
          <div id="varis">
            <h3>Varış : 12.01.2022</h3>
            <h1>AO</h1>
            <h2>Antalya</h2>
            <h3>17:30</h3>
          </div>
          <div id="tur" class="row justify-content-center">
            <h3 class="mt-2">Otobüs Bileti</h3>
            <i class="fas fa-bus fa-3x"></i> <br>
            <button type="button" class="btn btn-outline-secondary">
              <div class="d-flex justify-content-center">
                <i class="bi bi-box-arrow-in-down me-2 mt-1"></i>
                <span style="font-size: 1.3rem;">İndir</span>
              </div>
            </button>
          </div>
        </div>
        <div class="ticket2">
          <div id="gidis">
            <h3>Gidiş: 07.01.2022</h3>
            <h1>ESB</h1>
            <h2>Ankara</h2>
            <h3>19:45</h3>
          </div>
          <div id="varis">
            <h3>Varış : 12.01.2022</h3>
            <h1>KBP</h1>
            <h2>Kyiv</h2>
            <h3>21:45</h3>
          </div>
          <div id="tur" class="row justify-content-center">
            <br>
            <br>
            <h3 class="mt-2">Uçak Bileti</h3>
            <i class="fas fa-plane fa-3x"></i> <br>
            <button type="button" class="btn btn-outline-secondary">
              <div class="d-flex justify-content-center">
                <i class="bi bi-box-arrow-in-down me-2 mt-1"></i>
                <span style="font-size: 1.3rem;">İndir</span>
              </div>
            </button>
          </div>
        </div>
      </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");


.section{
    width: 100%;
    height: 170vh;
    background-image: url("../assets/12345.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Poppins", sans-serif;
}
.text {
  text-align: left 10px;
  text-shadow: 1px 1px rgb(56, 56, 56);
  width: 50px;
  height: 50px;
  position: absolute;
  left: 430px;
  top: 50px;
  right: 30px;
  color: white;
}
.box_seyehatlerim {
  height: 900px;
  position: absolute;
  background: rgb(250, 249, 249);
  left: 400px;
  top: 120px;
  right: 400px;
  box-shadow: 0 0 20px 9px #44403e1f;
  border-radius: 5px;
  border-bottom: 1px solid #999;
  background-color: rgb(255, 255, 255, 0.5);
  
}
.ticket1 {
  width: auto;
  height: 250px;
  box-shadow: 0 0 20px 9px #44403e1f;
  border-radius: 5px;
  border-bottom: 1px solid #999;
  background-color: rgb(255, 255, 255);
  margin: 20px;
}
#gidis {
  text-align: Center;
  width: 400px;
  height: 250px;
  position: absolute;
  left: 250px;
}
#varis {
  margin-top: 15px;
  font-size: 20px;
  text-align: center;
  width: 400px;
  height: 250px;
  position: absolute;
  right: 20px;
}
#tur {
  color: white;
  text-align: center;
  width: 200px;
  height: 250px;
  position: absolute;
  left: 20px;
  background-image: url("../bus.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 20px 9px #0000001f;
  border-radius: 5px;
  border-bottom: 1px solid #999;
  background-color: rgb(0, 0, 0);
  font-weight: 600;
  font-size: 0.8rem;
}


.ticket2 {
  column-count: 3 auto;
  column-width: auto;
  width: auto;
  height: 250px;
  box-shadow: 0 0 20px 9px #44403e1f;
  border-radius: 5px;
  border-bottom: 1px solid rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  margin: 20px;
}


</style>