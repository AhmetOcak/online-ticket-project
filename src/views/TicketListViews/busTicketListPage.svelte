<!-- Ahmet Ocak -->
<script>
    import TicketCard from '../../components/TicketList/ticketCard.svelte';
    import Navbar from '../../components/Navbar/navbar.svelte';
    let pushPath = '/buyBusTicketPage';
    let showButton = true;
</script>

<main>
    <div class="section d-flex flex-column justify-content-center">
        <Navbar />
        <div class="container  d-flex flex-column justify-content-start align-items-center">
            <ul class="list-group">
                <li class="list-group-item">
                    <TicketCard companyName="ISPARTA PETROL" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL" pushPage={pushPath} showButton={showButton}/>
                </li>
                <li class="list-group-item">
                    <TicketCard companyName="ISPARTA PETROL" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL" pushPage={pushPath} showButton={showButton}/>
                </li>
                <li class="list-group-item">
                    <TicketCard companyName="ISPARTA PETROL" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL" pushPage={pushPath} showButton={showButton}/>
                </li>
                <li class="list-group-item">
                    <TicketCard companyName="ISPARTA PETROL" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL" pushPage={pushPath} showButton={showButton}/>
                </li>
                <li class="list-group-item">
                    <TicketCard companyName="ISPARTA PETROL" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL" pushPage={pushPath} showButton={showButton}/>
                </li>
                <li class="list-group-item">
                    <TicketCard companyName="ISPARTA PETROL" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL" pushPage={pushPath} showButton={showButton}/>
                </li>
                <li class="list-group-item">
                    <TicketCard companyName="ISPARTA PETROL" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL" pushPage={pushPath} showButton={showButton}/>
                </li>
                <li class="list-group-item">
                    <TicketCard companyName="ISPARTA PETROL" departureTime="13:50" durationTime="7 saat 10 dakika" arrivalTime="21:00" price="175 TL" pushPage={pushPath} showButton={showButton}/>
                </li>
            </ul>
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

    li {
        width: 800px;
        background-color: rgb(255, 255,255, 0.7);
        padding: 20px;
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