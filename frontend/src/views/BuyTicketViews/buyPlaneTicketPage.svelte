<script>
    import Navbar from '../../components/Navbar/navbar.svelte';
    import TicketCard from '../../components/TicketList/ticketCard.svelte';
    import BuyTicket from '../../components/BuyTicket/buyTicket.svelte';
</script>

<main>
    <div class="section d-flex flex-column justify-content-center">
        <Navbar />
        <div class="container">
            <div class="ticketInfo mt-5">
                <TicketCard companyName="THY" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL" cancelTheTicket=true arrivalPlace="İstanbul" departurePlace="Isparta"/>
            </div>
            <BuyTicket buttonText="Ödeme Yap" showUserInfo=true/>
        </div>
    </div>
</main>

<style>
    .section {
        width: 100%;
        height: 100vh;
        background-image: url("../assets/planeBG.png");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: auto;
    }

    .container {
        width: 50%;
        position: relative;
        margin-top: 100px;
    }
</style>