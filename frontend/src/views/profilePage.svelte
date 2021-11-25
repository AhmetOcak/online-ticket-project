<script>
import Navbar from "../components/Navbar/navbar.svelte";

</script>

<main>
    <div class="section d-flex justify-content-center align-items-center ">

    <Navbar />
        <div class="container">
            <div class="main">
                <div class="row">

                    <div class="col-md-8 mt-1">
                        <div class="card mb-3 content">
                            <h1 class="m-3 pt-3">Profil</h1>
                            <div class="card-body">
                                <hr>
                                <hr>

                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Cinsiyet:</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        Erkek
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>İsim:</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        Sergen Berke
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Soy İsim:</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        Altan
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Doğum Tarihi:</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        14.06.2000
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>T.C. Kimlik No:</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        00000000000
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <h5>E-mail:</h5>
                                        </div>
                                        <div class="col-md-9 text-secondary">
                                            sergen.altan190@gmail.com
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h5>Cep Telefonu:</h5>
                                            </div>
                                            <div class="col-md-9 text-secondary">
                                                0000000000
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</main>

<style>

    .section{
        width: 100%;
        height: 100vh;
        background-image: url("../assets/Profile PageBG.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position:center;
        overflow: hidden;
    }



.main{
    padding: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
}

.card{
    position:relative;
    display: flex;
    flex-direction:column;
    border: solid 5px black;
}

.content{
    background-color: #BCBDB8;
}
.col-md-9{
    color: black;
}
</style>