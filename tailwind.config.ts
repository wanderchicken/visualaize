import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        white: "#fff",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "primary-100": "#A13B7A",
        "primary-200": "#DA4F79",
        "primary-300": "#C1477A",
        "primary-400": "#E75279",
        "primary-500": "#F84A6D",
        grey: "#D1D5DB",
        "grey-100": "#F7F8F9",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% / 4))" }, // Divide by number of copies
        },
        "scroll-right": {
          "0%": { transform: "translateX(calc(-100% / 4))" }, // Divide by number of copies
          "100%": { transform: "translateX(0)" },
        },
        auraEffect: {
          "0%": {
            boxShadow:
              "0 8px 16px rgba(0, 0, 0, 0.1), 0 0 30px rgba(0, 0, 0, 0.15)",
          },
          "50%": {
            boxShadow:
              "0 8px 30px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.3)",
          },
          "100%": {
            boxShadow:
              "0 8px 16px rgba(0, 0, 0, 0.1), 0 0 30px rgba(0, 0, 0, 0.15)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-left": "scroll-left 10s linear infinite",
        "scroll-right": "scroll-right 10s linear infinite",
        "dot-blink": "dot-blink 1.5s infinite ease-in-out",
        auraEffect: "auraEffect 2s infinite alternate",
      },
      backgroundImage: {
        primary_gradient: `linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), 
                           linear-gradient(269.14deg, #531270 0.74%, #F84A6D 94.78%)`,
        "hero-pattern": `url('../src/assets/HeroSection.png')`,
        hover_primary_gradient: `linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)),linear-gradient(89.52deg, #531270 8.25%, #F84A6D 96.27%)`,
        "how-it-work": `url('../src/assets/howItWorksbg.jpeg')`,
        "feature-gradient":
          "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FAF0FC, #FAF0FC)",
        "integration-gradient":
          "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #170D21, #170D21)",
        "text-gradient":
          "linear-gradient(269.15deg, #531270 -35.95%, #F84A6D 94.78%)",
        "architecture-bg-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.072) 3.25%, rgba(255, 255, 255, 0.0288) 96.75%)",
        hover_arc_gradient:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.09) 3.25%, rgba(255, 255, 255, 0.036) 96.75%)",
      },
      boxShadow: {
        custom: "0 10px 40px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
