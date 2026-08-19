import { useState, type SyntheticEvent } from "react";
import { FaCheckCircle, FaCommentDots, FaEnvelope, FaExclamationCircle, FaPaperPlane, FaUser } from "react-icons/fa";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqpzwyba";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data.error || "Hubo un inconveniente al procesar el mensaje. Por favor, reintenta.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("No se pudo enviar el mensaje por un error de conexión.");
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="surface-card rounded-3xl border border-[#17201c]/10 bg-white p-7 shadow-[0_12px_40px_rgba(39,54,74,0.08)] sm:p-10">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-[#27364a]/10 text-3xl text-[#27364a]">
              <FaCheckCircle />
            </span>
            <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[#17201c]">¡Mensaje enviado con éxito!</h3>
            <p className="mt-2 max-w-md text-sm text-[#637084] sm:text-base">
              Gracias por escribir, <strong className="text-[#17201c]">{formData.name}</strong>. Tu mensaje ya llegó a mi casilla y te responderé a la brevedad.
            </p>
            <button
              type="button"
              onClick={() => {
                setFormData({ name: "", email: "", message: "" });
                setStatus("idle");
              }}
              className="mt-6 rounded-xl bg-black px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#27364a]"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {status === "error" && (
              <div className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
                <FaExclamationCircle className="shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Campo: Nombre */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-[#637084]">
                Nombre
              </label>
              <div className="relative flex items-center">
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-[#17201c]/12 bg-[#fbfaf8] px-4 py-3.5 pr-11 text-sm font-medium text-[#17201c] placeholder:text-[#637084]/50 transition focus:border-[#27364a] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#27364a]/10"
                />
                <span className="pointer-events-none absolute right-4 text-[#637084]/60" aria-hidden="true">
                  <FaUser size={14} />
                </span>
              </div>
            </div>

            {/* Campo: Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-[#637084]">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-[#17201c]/12 bg-[#fbfaf8] px-4 py-3.5 pr-11 text-sm font-medium text-[#17201c] placeholder:text-[#637084]/50 transition focus:border-[#27364a] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#27364a]/10"
                />
                <span className="pointer-events-none absolute right-4 text-[#637084]/60" aria-hidden="true">
                  <FaEnvelope size={14} />
                </span>
              </div>
            </div>

            {/* Campo: Mensaje */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-[#637084]">
                Mensaje
              </label>
              <div className="relative">
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="¿En qué puedo ayudarte?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-[#17201c]/12 bg-[#fbfaf8] px-4 py-3.5 pr-11 text-sm font-medium text-[#17201c] placeholder:text-[#637084]/50 transition focus:border-[#27364a] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#27364a]/10"
                />
                <span className="pointer-events-none absolute right-4 top-4 text-[#637084]/60" aria-hidden="true">
                  <FaCommentDots size={15} />
                </span>
              </div>
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-black py-4 text-sm font-bold uppercase tracking-[.1em] text-white shadow-[0_8px_20px_rgba(0,0,0,.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#27364a] hover:shadow-[0_8px_24px_rgba(39,54,74,.32)] active:translate-y-0 disabled:opacity-70 sm:text-base"
            >
              {status === "submitting" ? (
                "Enviando mensaje..."
              ) : (
                <>
                  <span>Enviar mensaje</span>
                  <FaPaperPlane size={14} aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
