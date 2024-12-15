import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      {/* main */}
      <main style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
