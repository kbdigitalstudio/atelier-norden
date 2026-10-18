export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const raw = JSON.stringify(data);
  const safe = raw.replace(/<\/script>/g, "<\\/script>");
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safe }} />
  );
}
