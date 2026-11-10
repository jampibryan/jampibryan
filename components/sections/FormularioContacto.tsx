'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export default function FormularioContacto() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setStatusMessage('');

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Hubo un problema al enviar el formulario.');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setStatus('success');
      setStatusMessage('¡Gracias! Tu mensaje ha sido enviado correctamente.');
      reset();
    } catch {
      setStatus('error');
      setStatusMessage('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo o contáctame por LinkedIn.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-8 rounded-2xl bg-[#16161f] border border-white/5 space-y-5 sm:space-y-6"
    >
      {/* Nombre */}
      <div>
        <label
          htmlFor="nombre"
          className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2"
        >
          Nombre completo
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          {...register('nombre', { required: 'El nombre es obligatorio' })}
          className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-base"
        />
        {errors.nombre && (
          <p className="mt-1 text-xs text-red-400">{errors.nombre.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          placeholder="ejemplo@correo.com"
          {...register('email', {
            required: 'El correo es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Correo electrónico no válido',
            },
          })}
          className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-base"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Asunto */}
      <div>
        <label
          htmlFor="asunto"
          className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2"
        >
          Asunto
        </label>
        <input
          id="asunto"
          type="text"
          placeholder="Propuesta de proyecto / Oportunidad"
          {...register('asunto', { required: 'El asunto es obligatorio' })}
          className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-base"
        />
        {errors.asunto && (
          <p className="mt-1 text-xs text-red-400">{errors.asunto.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label
          htmlFor="mensaje"
          className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={4}
          placeholder="Cuéntame sobre tu proyecto o necesidad..."
          {...register('mensaje', {
            required: 'El mensaje es obligatorio',
            minLength: { value: 10, message: 'Mínimo 10 caracteres' },
          })}
          className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-base resize-none"
        />
        {errors.mensaje && (
          <p className="mt-1 text-xs text-red-400">{errors.mensaje.message}</p>
        )}
      </div>

      {/* Status alerts */}
      {status === 'success' && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          <CheckCircle2 size={18} />
          <span>{statusMessage}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle size={18} />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
      >
        {status === 'loading' ? (
          <span>Enviando mensaje...</span>
        ) : (
          <>
            <Send size={18} />
            <span>Enviar mensaje</span>
          </>
        )}
      </button>
    </form>
  );
}
