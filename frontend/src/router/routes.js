import HomePage from '../views/homepage.svelte';
import TicketCancellationPage from '../views/ticketCancellationPage.svelte';
import BusTicketListPage from '../views/TicketListViews/busTicketListPage.svelte';
import PlaneTicketListPage from '../views/TicketListViews/planeTicketListPage.svelte';
import BuyBusTicketPage from '../views/BuyTicketViews/buyBusTicketPage.svelte';
import BuyPlaneTicketPage from '../views/BuyTicketViews/buyPlaneTicketPage.svelte';

const routes = {
    '/': HomePage,
    '/ticketCancellationPage': TicketCancellationPage,
    '/busTicketListPage': BusTicketListPage,
    '/planeTicketListPage': PlaneTicketListPage,
    '/buyBusTicketPage': BuyBusTicketPage,
    '/buyPlaneTicketPage': BuyPlaneTicketPage
};

export default routes;