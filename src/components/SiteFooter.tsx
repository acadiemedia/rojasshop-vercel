import { Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone } from "lucide-react";
import {
  SHOP_NAME,
  SHOP_LOCATION,
  SHOP_HOURS,
  WHATSAPP_NUMBER,
  whatsappLink,
} from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground text-primary font-black">
              FR
            </span>
            <span className="text-lg font-extrabold">{SHOP_NAME}</span>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/80">
            Tu ferretería de confianza en {SHOP_LOCATION}. Materiales, herramientas y
            atención personalizada.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Visítanos</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/90">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {SHOP_LOCATION}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {SHOP_HOURS.weekdays}
                <br />
                {SHOP_HOURS.sunday}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                +{WHATSAPP_NUMBER.replace(/^51/, "51 ")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Navegación</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/catalogo" className="hover:underline">
                Catálogo
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} {SHOP_NAME} · {SHOP_LOCATION}
        </div>
      </div>
    </footer>
  );
}
