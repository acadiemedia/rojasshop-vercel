import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SHOP_NAME } from "@/lib/whatsapp";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-black text-lg">
            FR
          </span>
          <span className="font-extrabold text-foreground tracking-tight">
            {SHOP_NAME}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-accent text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <WhatsAppButton size="sm" message="Hola, vengo de la web de Ferretería Rojas">
              WhatsApp
            </WhatsAppButton>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-accent md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-accent text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-accent hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <WhatsAppButton
                size="md"
                className="w-full"
                message="Hola, vengo de la web de Ferretería Rojas"
              >
                Escribir por WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
