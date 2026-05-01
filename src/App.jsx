import logo from '../imagenes/obminmobiliarios.cl_files/cropped-logo-obm-2-172x75.png'
import omarPhoto from '../imagenes/obminmobiliarios.cl_files/foto-omar-e1771451191526.jpeg'
import cajonRomeroImg from '../imagenes/obminmobiliarios.cl_files/cajonElRomero3-rketouel2tzqfctlf0q9f82lyjeqkfjwpf4rrrisug.jpeg'
import elRomeroImg from '../imagenes/obminmobiliarios.cl_files/elRomero4-rkete5ylfldgiuc0rwjulf32zy1m485owkb6hlctjc.jpeg'
import lasBarrancasImg from '../imagenes/obminmobiliarios.cl_files/lasBarrancasTerreno3-rkesk0b05y3a184zvd9r3j1ovwoo5tfpratd70.jpeg'
import senderosGolfImg from '../imagenes/obminmobiliarios.cl_files/proyectoParcelasSenderoGolfCoquimbo2-rkdp61tse70hxtsuqy5e7u.jpeg'
import guanaqueroImg from '../imagenes/obminmobiliarios.cl_files/GuanaqueroTerrn4-rkdou0i6vkjb9laa18udsdsmp0y1ysgh5hglkkc58o.jpeg'
import alamosImg from '../imagenes/obminmobiliarios.cl_files/alamosDeMarquesa5-rkeu9pfmrgju3sioljd69gjwlel0eldfwodq7ul8qw.jpg'

const projects = [
  { name: 'Cajón El Romero', image: cajonRomeroImg },
  { name: 'El Romero', image: elRomeroImg },
  { name: 'Las Barrancas', image: lasBarrancasImg },
  { name: 'Senderos del Golf', image: senderosGolfImg },
  { name: 'Guanaquero', image: guanaqueroImg },
  { name: 'Álamos de Marquesa', image: alamosImg },
]

const pillars = [
  'Transparencia: acompañamiento honesto en cada etapa de la compra.',
  'Compromiso: tu tranquilidad es nuestra prioridad número uno.',
  'Experiencia: te asesoramos de la forma más profesional.',
]

const services = [
  { title: 'Seguridad', icon: '🛡️' },
  { title: 'Luz con panel solar', icon: '☀️' },
  { title: 'Agua por camión aljibe', icon: '🚚' },
  { title: 'Acceso vial', icon: '🛣️' },
  { title: 'Señal', icon: '📶' },
  { title: 'Equipamiento cercano', icon: '🏡' },
]

const testimonials = [
  {
    name: 'Familia Rojas',
    text: 'El proceso fue claro y seguro desde el primer contacto. Nos guiaron en todo momento hasta concretar nuestra compra.',
  },
  {
    name: 'Inversionista de Coquimbo',
    text: 'Destaco la transparencia y la asesoría profesional. Encontramos una parcela con excelente conectividad y plusvalía.',
  },
  {
    name: 'Cliente OBM',
    text: 'La atención fue cercana y familiar, justo lo que buscábamos para tomar una decisión importante con confianza.',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center">
            <img src={logo} alt="OBM Inmobiliaria" className="h-10 w-auto md:h-12" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#quienes-somos" className="transition hover:text-slate-900">Quiénes somos</a>
            <a href="#proyectos" className="transition hover:text-slate-900">Proyectos</a>
            <a href="#servicios" className="transition hover:text-slate-900">Servicios</a>
            <a href="#contacto" className="transition hover:text-slate-900">Contacto</a>
          </nav>
          <a
            href="https://wa.me/56932664438?text=Hola,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20de%20sus%20proyectos."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24 lg:px-8">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                OBM Inmobiliaria
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Encuentra la propiedad de tus sueños
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-200">
                Parcelas en la Cuarta Región con alta plusvalía y excelente conectividad.
                Te acompañamos con un enfoque cercano, profesional y transparente.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/56932664438?text=Hola,%20me%20comunico%20a%20trav%C3%A9s%20de%20su%20sitio%20web.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20detallada%20de%20sus%20proyectos."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-200"
                >
                  Hablemos por WhatsApp
                </a>
                <a
                  href="#proyectos"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Ver proyectos
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <img
                src={omarPhoto}
                alt="Omar Beltrán Moreno"
                className="h-72 w-full rounded-2xl object-cover object-center md:h-80"
              />
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Omar Beltrán Moreno</h2>
                  <p className="text-sm text-slate-300">Agente Inmobiliario</p>
                </div>
                <span className="rounded-full bg-amber-400/20 px-3 py-1 text-sm font-semibold text-amber-200">★★★★★</span>
              </div>
            </div>
          </div>
        </section>

        <section id="quienes-somos" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Quiénes somos</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Más que una inmobiliaria, tu aliado de confianza</h2>
              <p className="mt-5 text-slate-600">
                En OBM Inmobiliarios no solo vendemos propiedades, construimos relaciones basadas en la confianza y la seguridad.
                Con años de experiencia en el mercado chileno, ofrecemos soluciones integrales para quienes buscan su próximo hogar
                o una inversión sólida. Somos el puente hacia tu próxima gran inversión.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Nuestros pilares</h3>
              <ul className="mt-4 space-y-3">
                {pillars.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-slate-100 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Proyectos</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Proyectos en la Cuarta Región</h2>
              </div>
              <a
                href="https://obminmobiliarios.cl/catalago-de-terrenos/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900"
              >
                Ver catálogo completo
              </a>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article key={project.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                  <img src={project.image} alt={project.name} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">Ubicación con potencial de valorización y conectividad estratégica.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Servicios</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Servicios que ofrecen nuestras parcelas</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-2xl">{service.icon}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonios" className="bg-slate-100 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Nuestros clientes</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Experiencias OBM Inmobiliaria</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote key={item.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm leading-relaxed text-slate-600">“{item.text}”</p>
                  <footer className="mt-4 text-sm font-semibold text-slate-900">{item.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Contáctanos</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Agenda tu visita o solicita información</h2>
              <p className="mt-4 text-slate-600">
                Estamos listos para ayudarte a elegir la mejor alternativa para tu familia o inversión en la Cuarta Región.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://api.whatsapp.com/send?phone=56932664438"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  WhatsApp: +56 9 3266 4438
                </a>
                <a
                  href="https://www.instagram.com/obminmobiliarios"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61567135225376"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@obminmobiliarios"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  TikTok
                </a>
              </div>
            </div>

            <form
              action="https://formspree.io/f/mkoqvvkj"
              method="POST"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Nombre completo</span>
                  <input
                    name="nombre"
                    type="text"
                    required
                    placeholder="Ej: Juan Pérez"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600"
                  />
                </label>
                <label>
                  <span className="mb-1 block text-sm font-medium text-slate-700">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600"
                  />
                </label>
                <label>
                  <span className="mb-1 block text-sm font-medium text-slate-700">WhatsApp</span>
                  <input
                    name="telefono"
                    type="tel"
                    required
                    placeholder="+56 9..."
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600"
                  />
                </label>
                <label>
                  <span className="mb-1 block text-sm font-medium text-slate-700">Tipo de propiedad</span>
                  <select
                    name="interes"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600"
                  >
                    <option value="Parcela">Parcela</option>
                    <option value="Casa">Casa</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Otro">Otro</option>
                  </select>
                </label>
                <label>
                  <span className="mb-1 block text-sm font-medium text-slate-700">Fecha de visita</span>
                  <input
                    name="fecha_cita"
                    type="date"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Mensaje adicional</span>
                  <textarea
                    name="mensaje"
                    rows="4"
                    placeholder="Cuéntanos qué tipo de propiedad te interesa"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
              >
                Agendar y preguntar
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 lg:flex-row lg:px-8">
          <p>© 2026 OBM Inmobiliaria. Todos los derechos reservados.</p>
          <p>Diseño web modernizado para presentación profesional.</p>
        </div>
      </footer>
    </div>
  )
}
