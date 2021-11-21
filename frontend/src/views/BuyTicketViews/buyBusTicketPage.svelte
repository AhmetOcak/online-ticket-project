<script>
    import Navbar from '../../components/Navbar/navbar.svelte';
    import TicketCard from '../../components/TicketList/ticketCard.svelte';
    import BuyTicket from '../../components/BuyTicket/buyTicket.svelte';
</script>

<main>
    <div class="section d-flex flex-column justify-content-center">
        <Navbar />
        <div class="container">
            <div class="ticketInfo">
                <TicketCard companyName="ISPARTA PETROL" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL"/>
            </div>
            <BuyTicket />
        </div>
    </div>
</main>

<style>
    .section {
        width: 100%;
        height: 100vh;
        background-image: url("../assets/busBG.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .container {
        width: 50%;
    }
</style>