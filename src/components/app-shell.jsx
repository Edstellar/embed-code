import { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { AppShell, Navbar, Text, MantineProvider } from "@mantine/core";
import MyGlobalStyles from "../assets/global-styles";

function AppShellComponent() {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          fontFamily: "Inter, sans-serif",
          breakpoints: {
            xs: "320px",
            sm: "480px",
            md: "768px",
            lg: "992px",
            xl: "1440px",
          },
          fontSizes: {
            xs: "16px",
            sm: "24px",
            md: "32px",
            lg: "40px",
            xl: "48px",
            xxl: "56px",
          },
          spacing: {
            xs: "8px",
            sm: "16px",
            md: "24px",
            lg: "32px",
            xl: "40px",
            xxl: "48px",
          },
          colorScheme: "light",
        }}
      >
        <MyGlobalStyles />
        <AppShell
          navbar={
            <Navbar p="md" width={{ sm: 200, lg: 300 }}>
              <Text>Logo</Text>
              <NavLink>
                <Text>Dashboard</Text>
              </NavLink>
              <NavLink>
                <Text>View Assesments</Text>
              </NavLink>
              <NavLink>
                <Text>Categories</Text>
              </NavLink>
              <NavLink>
                <Text>Create New</Text>
              </NavLink>
              <Text>Log out</Text>
            </Navbar>
          }
        >
          <Outlet />
        </AppShell>
      </MantineProvider>
    </>
  );
}

export default AppShellComponent;
