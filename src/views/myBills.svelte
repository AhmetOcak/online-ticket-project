<!-- Ahmet Ocak -->
<script>
    import Navbar from '../components/Navbar/navbar.svelte';
    import BillCard from '../components/Bill/billCard.svelte';
</script>

<main>
    <div class="section d-flex flex-column justify-content-center">
        <Navbar />
        <div class="container  d-flex flex-column justify-content-start align-items-center">
            <h1 class="pt-3">Faturalarım</h1>
            <ul class="list-group">
                <li>
                    <BillCard companyName="THY" userName="Ahmet Ocak" billPrice="175" date="01.12.2021" ticketID="132"/>
                </li>
                <li>
                    <BillCard companyName="Pegasus" userName="Ahmet Ocak" billPrice="200" date="11.12.2021" ticketID="133"/>
                </li>
                <li>
                    <BillCard companyName="Pamukkale" userName="Ahmet Ocak" billPrice="100" date="23.12.2021" ticketID="134"/>
                </li>
                <li>
                    <BillCard companyName="Isparta Petrol" userName="Ahmet Ocak" billPrice="185" date="30.12.2021" ticketID="135"/>
                </li>
            </ul>
        </div>
    </div>
</main>

<style>
    .section {
        width: 100%;
        height: 100vh;
        background-image: url("../assets/billBG.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    li {
        width: 800px;
        background-color: rgb(255, 255, 255, 0.8);
        padding: 20px;
        list-style: none;
    }
    
    .container {
        margin-top: 100px;
        overflow: auto;
        width: 900px;
        height: 70vh;
        background-color: rgb(255, 255,255, 0.5);
    }

    ul {
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>