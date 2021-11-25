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
};

export default routes;
