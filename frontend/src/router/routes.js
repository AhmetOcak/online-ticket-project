<<<<<<< HEAD
import HomePage from '../views/homepage.svelte';
import TicketCancellationPage from '../views/ticketCancellationPage.svelte';
import BusTicketListPage from '../views/TicketListViews/busTicketListPage.svelte';
import PlaneTicketListPage from '../views/TicketListViews/planeTicketListPage.svelte';
import BuyBusTicketPage from '../views/BuyTicketViews/buyBusTicketPage.svelte';
import BuyPlaneTicketPage from '../views/BuyTicketViews/buyPlaneTicketPage.svelte';
import WalletPage from '../views/walletPage.svelte';
import MyBillsPage from '../views/myBills.svelte';
import MSSPage from '../views/MSSPage.svelte';
import AnnouncementPage from '../views/announcementPage.svelte';
import Campaign1Page from '../views/campaign1Page.svelte';
import Campaign2Page from '../views/campaign2Page.svelte';
import Campaign3Page from '../views/campaign3Page.svelte';
import CustomerServicePage from '../views/customerServicePage.svelte';
import FAQPage from '../views/faqPage.svelte';
import HelpPage from '../views/helpPage.svelte';
import ProfilePage from '../views/profilePage.svelte';
import OBFPage from '../views/OBFPage.svelte';

const routes = {
    '/': HomePage,
    '/ticketCancellationPage': TicketCancellationPage,
    '/busTicketListPage': BusTicketListPage,
    '/planeTicketListPage': PlaneTicketListPage,
    '/buyBusTicketPage': BuyBusTicketPage,
    '/buyPlaneTicketPage': BuyPlaneTicketPage,
    '/walletPage' : WalletPage,
    '/myBillsPage': MyBillsPage,
    '/mssPage': MSSPage,
    '/announcementPage': AnnouncementPage,
    '/campaign1Page': Campaign1Page,
    '/campaign2Page': Campaign2Page,
    '/campaign3Page': Campaign3Page,
    '/customerServicePage': CustomerServicePage,
    '/faqPage': FAQPage,
    '/helpPage': HelpPage,
    '/profilePage': ProfilePage,
    '/obfPage': OBFPage
=======
import HomePage from "../views/homepage.svelte";
import TicketCancellationPage from "../views/ticketCancellationPage.svelte";
import BusTicketListPage from "../views/TicketListViews/busTicketListPage.svelte";
import PlaneTicketListPage from "../views/TicketListViews/planeTicketListPage.svelte";
import BuyBusTicketPage from "../views/BuyTicketViews/buyBusTicketPage.svelte";
import BuyPlaneTicketPage from "../views/BuyTicketViews/buyPlaneTicketPage.svelte";
import WalletPage from "../views/walletPage.svelte";
import MyBillsPage from "../views/myBills.svelte";
import MSSPage from "../views/MSSPage.svelte";
import OBFPage from "../views/OBFPage.svelte";
import LoginPage from "../views/loginPage.svelte";
import AccountSettings from "../views/accountSettings.svelte";
import SigninPage from "../views/signinPage.svelte";
import Reservations from "../views/reservations.svelte";
import MyTravels from "../views/myTravels.svelte";

const routes = {
  "/": HomePage,
  "/ticketCancellationPage": TicketCancellationPage,
  "/busTicketListPage": BusTicketListPage,
  "/planeTicketListPage": PlaneTicketListPage,
  "/buyBusTicketPage": BuyBusTicketPage,
  "/buyPlaneTicketPage": BuyPlaneTicketPage,
  "/walletPage": WalletPage,
  "/myBillsPage": MyBillsPage,
  "/mssPage": MSSPage,
  "/obfPage": OBFPage,
  "/loginPage": LoginPage,
  "/accountSettings": AccountSettings,
  "/signinPage": SigninPage,
  "/reservations": Reservations,
  "/myTravels": MyTravels,
>>>>>>> 1ee9b5a376ae98b8b135bca126b97834d77b3aee
};

export default routes;
