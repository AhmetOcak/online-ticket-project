import HomePage from '../views/homepage.svelte';
import TicketCancellationPage from '../views/ticketCancellationPage.svelte';
import TicketList from '../views/ticketList.svelte';

const routes = {
    '/': HomePage,
    '/ticketCancellationPage': TicketCancellationPage,
    '/ticketList': TicketList
};

export default routes;