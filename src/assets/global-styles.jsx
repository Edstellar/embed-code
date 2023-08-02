import { Global } from "@mantine/core";
import bold from "./fonts/Inter-Bold.ttf";
import medium from "./fonts/Inter-Medium.ttf";
import semiBold from "./fonts/Inter-SemiBold.ttf";
import regular from "./fonts/Inter-Regular.ttf";

export default function MyGlobalStyles() {
  return (
    <Global
      styles={(theme) => (
        [
          {
            "@font-face": {
              fontFamily: "Inter",
              src: `url('${bold}') format("woff")`,
              fontWeight: 700,
              fontStyle: "normal",
            },
          },
          {
            "@font-face": {
              fontFamily: "Inter",
              src: `url('${medium}') format("woff")`,
              fontWeight: 500,
              fontStyle: "normal",
            },
          },
          {
            "@font-face": {
              fontFamily: "Inter",
              src: `url('${regular}') format("woff")`,
              fontWeight: 400,
              fontStyle: "normal",
            },
          },
          {
            "@font-face": {
              fontFamily: "Inter",
              src: `url('${semiBold}') format("woff")`,
              fontWeight: 600,
              fontStyle: "normal",
            },
          },
        ],
        {
          "*, *::before, *::after": {
            boxSizing: "border-box",
            padding: 0,
            margin: 0,
            color: "#222",
            border: "none",
            fontSize: "18px",
            lineHeight: 1.5,
            fontWeight: 400,
          },

          body: {
            fontFamily: theme.fontFamily,
          },

          a: {
            color: "inherit",
            textDecoration: "none",
          },

          "h1.mantine-Text-root": {
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizes.xxl,
            lineHeight: 1.5,
            fontWeight: 300,
            marginBottom: "16px",
            "@media (max-width: 992px)": {
              fontSize: theme.fontSizes.xl,
            },
            "@media (max-width: 768px)": {
              fontSize: theme.fontSizes.lg,
            },
            "@media (max-width: 480px)": {
              fontSize: theme.fontSizes.md,
            },
          },

          "h2.mantine-Text-root": {
            fontSize: theme.fontSizes.xl,
            fontWeight: 400,
            marginBottom: "16px",
            "@media (max-width: 992px)": {
              fontSize: theme.fontSizes.lg,
            },
            "@media (max-width: 768px)": {
              fontSize: theme.fontSizes.md,
            },
            "@media (max-width: 480px)": {
              fontSize: theme.fontSizes.sm,
            },
          },

          "h3.mantine-Text-root": {
            fontSize: theme.fontSizes.lg,
            fontWeight: 400,
            marginBottom: "16px",
            "@media (max-width: 992px)": {
              fontSize: theme.fontSizes.md,
            },
            "@media (max-width: 768px)": {
              fontSize: theme.fontSizes.sm,
            },
          },

          "h4.mantine-Text-root": {
            fontSize: theme.fontSizes.md,
            fontWeight: 400,
            marginBottom: "16px",
            "@media (max-width: 992px)": {
              fontSize: theme.fontSizes.sm,
            },
            "@media (max-width: 768px)": {
              fontSize: "18px",
            },
          },

          "p.mantine-Text-root": {
            fontSize: theme.fontSizes.xs,
            lineHeight: 0.95,
            fontWeight: 300,
            marginBottom: "16px",
          },

          ".mantine-Text-root": {
            fontSize: theme.fontSizes.xs,
            lineHeight: 0.95,
            fontWeight: 300,
            marginBottom: "16px",
          },
        }
      )}
    />
  );
}
