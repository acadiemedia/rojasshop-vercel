import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Truck, HandHeart, Wallet, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { categories } from "@/lib/categories";
import {
  SHOP_NAME,
  SHOP_LOCATION,
  SHOP_HOURS,
  MAPS_EMBED_SRC,
  MAPS_DIRECTIONS_URL,
} from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ferretería Rojas — Tu ferretería de confianza en Cayma, Arequipa" },
      {
        name: "description",
        content:
          "Ferretería en Cayma, Arequipa. Plomería, electricidad, construcción, herramientas y pinturas. Atención personalizada y envíos a obra. Pide por WhatsApp.",
      },
      { property: "og:title", content: "Ferretería Rojas — Cayma, Arequipa" },
      {
        property: "og:description",
        content:
          "Plomería, electricidad, construcción, herramientas y pinturas en Cayma. Atención personalizada y envíos a obra.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <img src="/rojas.jpg" alt="Ferretería Rojas" className="w-full h-64 md:h-96 object-cover" />
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "var(--stripes-blue)" }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xs font-semibold backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> {SHOP_LOCATION}
          </div>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {SHOP_NAME}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-primary-foreground/90 md:text-xl">
            Tu ferretería de confianza en Cayma. Materiales, herramientas y
            atención personalizada para tu casa o tu obra.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              size="lg"
              message="Hola Ferretería Rojas, quisiera hacer un pedido."
            >
              Pedir por WhatsApp
            </WhatsAppButton>
            <a
              href="#ubicacion"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md border-2 border-primary-foreground/80 bg-transparent px-7 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              <MapPin className="h-5 w-5" /> Cómo llegar
            </a>
          </div>
        </div>
        {/* Bottom diagonal stripe accent */}
        <div
          aria-hidden
          className="h-3 w-full"
          style={{ backgroundImage: "var(--stripes-blue)" }}
        />
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-3">
          {[
            { icon: HandHeart, label: "Atención personalizada" },
            { icon: Truck, label: "Envíos a obra en Cayma" },
            { icon: Wallet, label: "Yape · Plin · Efectivo" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-primary"
            >
              <Icon className="h-5 w-5" /> {label}
            </div>
          ))}
        </div>
      </section>

      {/* QUICK CATALOG */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-8 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
              Lo que encontrarás
            </h2>
            <p className="mt-2 text-muted-foreground">
              Categorías principales — consulta disponibilidad por WhatsApp.
            </p>
          </div>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Ver catálogo completo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/catalogo"
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[var(--shadow-elegant)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/25 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <cat.icon className="h-7 w-7" />
              </span>
              <span className="text-sm font-bold text-foreground">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Cerca de ti, en Cayma",
                body: "Sin viajar al centro de Arequipa. Vente caminando o pásate en moto, te atendemos al toque.",
              },
              {
                title: "Consejo de quien sabe",
                body: "Atención de la familia. Te ayudamos a elegir lo correcto para que el trabajo salga bien a la primera.",
              },
              {
                title: "Envíos a tu obra",
                body: "Coordina por WhatsApp y te llevamos el material directo a tu obra en Cayma y alrededores.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-xl border-l-4 border-primary bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-lg font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="ubicacion" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
              Visítanos en Cayma
            </h2>
            <ul className="mt-5 space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span>{SHOP_LOCATION}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <span>
                  {SHOP_HOURS.weekdays}
                  <br />
                  {SHOP_HOURS.sunday}
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
              >
                <MapPin className="h-4 w-4" /> Abrir en Google Maps
              </a>
              <Link
                to="/contacto"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-semibold text-foreground hover:bg-accent"
              >
                Ver datos de contacto
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-elegant)]">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Ubicación Ferretería Rojas en Cayma, Arequipa"
              className="h-72 w-full md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[var(--gradient-primary)] text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-14 text-center md:py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            ¿Listo para tu pedido?
          </h2>
          <p className="max-w-xl text-primary-foreground/90">
            Escríbenos por WhatsApp y te ayudamos a cotizar, separar y coordinar la
            entrega.
          </p>
          <WhatsAppButton
            size="lg"
            message="Hola Ferretería Rojas, quisiera coordinar un pedido."
          >
            Escribir por WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </SiteLayout>
  );
}
