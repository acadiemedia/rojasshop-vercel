import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Truck, Wallet } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  SHOP_LOCATION,
  SHOP_HOURS,
  WHATSAPP_NUMBER,
  MAPS_EMBED_SRC,
  MAPS_DIRECTIONS_URL,
  whatsappLink,
} from "@/lib/whatsapp";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Ferretería Rojas en Cayma, Arequipa" },
      {
        name: "description",
        content:
          "Ubícanos en Cayma, Arequipa. Horarios, WhatsApp, métodos de pago (Yape, Plin, efectivo) y envíos a obra.",
      },
      { property: "og:title", content: "Contacto — Ferretería Rojas" },
      {
        property: "og:description",
        content:
          "WhatsApp, ubicación en Cayma y envíos a obra. Pagos con Yape, Plin o efectivo.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <SiteLayout>
      {/* Big WhatsApp CTA */}
      <section className="bg-[var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Contacto</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/90">
            La forma más rápida de llegar a nosotros es por WhatsApp. Te respondemos
            en horario de tienda.
          </p>
          <div className="mt-6">
            <WhatsAppButton
              size="lg"
              message="Hola Ferretería Rojas, quisiera hacer una consulta."
            >
              Escribir por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <InfoBlock icon={<MapPin className="h-5 w-5" />} title="Ubicación">
              <p>{SHOP_LOCATION}</p>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Abrir en Google Maps →
              </a>
            </InfoBlock>

            <InfoBlock icon={<Clock className="h-5 w-5" />} title="Horario">
              <p>{SHOP_HOURS.weekdays}</p>
              <p>{SHOP_HOURS.sunday}</p>
            </InfoBlock>

            <InfoBlock icon={<Phone className="h-5 w-5" />} title="Teléfono / WhatsApp">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="text-foreground hover:underline"
              >
                +{WHATSAPP_NUMBER.replace(/^51/, "51 ")}
              </a>
              <a
                href={whatsappLink("Hola Ferretería Rojas")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm font-semibold text-primary hover:underline"
              >
                Abrir chat de WhatsApp →
              </a>
            </InfoBlock>

            <InfoBlock icon={<Wallet className="h-5 w-5" />} title="Métodos de pago">
              <div className="flex flex-wrap gap-2">
                {["Yape", "Plin", "Efectivo"].map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-primary/25 px-3 py-1 text-sm font-semibold text-primary"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </InfoBlock>

            <InfoBlock icon={<Truck className="h-5 w-5" />} title="Envíos a obra">
              <p>
                Coordinamos entregas a tu obra en Cayma y alrededores. Escríbenos por
                WhatsApp con la dirección y la lista de materiales para cotizar el
                envío.
              </p>
            </InfoBlock>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-elegant)] md:sticky md:top-20 md:self-start">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Ubicación Ferretería Rojas en Cayma, Arequipa"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
      </div>
      <div className="mt-2 text-sm text-foreground/90">{children}</div>
    </div>
  );
}
