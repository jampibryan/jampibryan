import { Hero } from '@/components/sections/Hero';
import { SobreMi } from '@/components/sections/SobreMi';
import { Competencias } from '@/components/sections/Competencias';
import { Habilidades } from '@/components/sections/Habilidades';
import { Experiencia } from '@/components/sections/Experiencia';
import { Proyectos } from '@/components/sections/Proyectos';
import { Certificaciones } from '@/components/sections/Certificaciones';
import { Contacto } from '@/components/sections/Contacto';

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Competencias />
      <Habilidades />
      <Experiencia />
      <Proyectos />
      <Certificaciones />
      <Contacto />
    </>
  );
}
