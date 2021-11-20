<script>
    import PageLang from './pageLang.svelte';
    import TlUsd from './tlUsd.svelte';
</script>

<main>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
            <a href="#" class="navbar-brand fs-3">Online Bilet</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link"><i class="bi bi-x-circle pe-1"></i>Bilet İptal</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link"><i class="bi bi-search pe-1"></i>Rezervasyonlarım</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link"><i class="bi bi-person-circle pe-1"></i>Üye ol</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link"><i class="bi bi-box-arrow-in-right pe-1"></i>Giriş</a>
                    </li>
                    <li class="nav-item px-3">
                        <PageLang />
                    </li>
                    <li class="nav-item">
                        <TlUsd />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</main>

<style>
    
</style>