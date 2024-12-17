import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./features/countries/Country";
import Countries from "./pages/Countries";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/index.css";
import { ThemeContext } from "./context/ThemeContext";
import CountryMoreDetails from "./features/countries/CountryMoreDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <ThemeContext>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="countries" element={<Home />} />
              <Route
                path="countries/:country"
                element={<CountryMoreDetails />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "#131313",
            },
          }}
        />
      </QueryClientProvider>
    </ThemeContext>
  );
}

export default App;
