<script>
    import PageLang from './pageLang.svelte';
    import TlUsd from './tlUsd.svelte';
</script>

<main>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
            <a href="#" class="navbar-brand">Online Bilet</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Bilet İptal</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Rezervasyonlarım</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Üye ol</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Giriş</a>
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