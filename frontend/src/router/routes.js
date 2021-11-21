import HomePage from '../views/homepage.svelte';
import TicketCancellationPage from '../views/ticketCancellationPage.svelte';
import BusTicketListPage from '../views/TicketListViews/busTicketListPage.svelte';
import PlaneTicketListPage from '../views/TicketListViews/planeTicketListPage.svelte';

const routes = {
    '/': HomePage,
    '/ticketCancellationPage': TicketCancellationPage,
    '/busTicketListPage': BusTicketListPage,
    '/planeTicketListPage': PlaneTicketListPage
};

export default routes;