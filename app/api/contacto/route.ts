import { NextResponse } from "next/server";

// Endpoint de demostración: simula el envío de un mensaje de contacto.
// No almacena ni reenvía datos a ningún servidor real.
export async function POST(req: Request) {
  const body = await req.json();

  // Validación básica en el servidor (refuerzo de la validación del cliente)
  const required = ["name", "email", "projectType", "budget", "message"];
  const missing = required.filter((key) => !body[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Faltan campos: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  // Simula un retraso de red para demostrar el estado de carga del formulario
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // En un entorno real aquí se enviaría el correo o se guardaría el lead.
  return NextResponse.json({ ok: true, received: body.name });
}
