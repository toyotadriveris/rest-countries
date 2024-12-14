import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      {/* header */}
      {/* main */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
