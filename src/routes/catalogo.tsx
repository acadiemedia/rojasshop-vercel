import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { categories } from "@/lib/categories";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo — Ferretería Rojas en Cayma, Arequipa" },
      {
        name: "description",
        content:
          "Plomería, electricidad, construcción, herramientas y pinturas en Cayma. Consulta disponibilidad y precios por WhatsApp.",
      },
      { property: "og:title", content: "Catálogo — Ferretería Rojas" },
      {
        property: "og:description",
        content:
          "Categorías principales de nuestra ferretería en Cayma. Consulta por WhatsApp.",
      },
    ],
  }),
  component: CatalogoPage,
});

function CatalogoPage() {
  return (
    <SiteLayout>
      {/* Page header */}
      <section className="bg-[var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Catálogo</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/90">
            Estas son nuestras categorías principales. Para disponibilidad, marcas y
            precios actualizados, consúltanos directamente por WhatsApp — te
            respondemos al toque.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <article
              key={cat.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <header className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary">
                  <cat.icon className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="text-2xl font-extrabold text-foreground">
                    {cat.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </header>

              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <WhatsAppButton size="md" message={cat.whatsappMessage}>
                  Consultar por WhatsApp
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-lg border border-dashed border-border bg-secondary p-4 text-sm text-muted-foreground">
          ¿No ves lo que buscas? Probablemente lo tengamos. Escríbenos por WhatsApp y
          te confirmamos al instante.
        </p>
      </section>
    </SiteLayout>
  );
}
