
import Payment from "./Payment";
import Completion from "./Completion";
import BuyCreditsPage from "./BuyCredits";
import PaymentHistory from "./PaymentHistory";
import TransactionPage from "./RecentTransactions";
import LandingPage from "./LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./Pricing";
import TreeComponent from "./Tree";
import Landing from "./landingPage/Landing";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/" element={<BuyCreditsPage/>} />
          <Route path="/history" element={<PaymentHistory/>} />
          <Route path="/t" element={<TransactionPage/>} />
          <Route path="/landing" element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
