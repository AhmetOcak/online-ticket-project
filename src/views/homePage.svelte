<script>
    import Navbar from '../components/Navbar/navbar.svelte';
    import TicketSection from '../components/Home/ticketMenu.svelte';
    import Footer from '../components/Home/footer.svelte';
    import Announcement from '../components/Home/announcementHome.svelte';
    import Campaigns from '../components/Home/campaignsHome.svelte'
</script>

<main>
    <!-- NAVBAR -->
    <Navbar />

    <!-- BİLET SATIN ALMA BÖLÜMÜ-->
    <TicketSection />

    <!--Duyurular Bölümü-->
    <div class="container">
        <Announcement />
        <div class="a"></div>
        <Campaigns />
    </div>

    <!-- FOOTER -->
    <Footer />
</main>

<style>
    .container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 50px;

    }

    .a{
        width: 30vh;
    }
</style>