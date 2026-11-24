import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        index: `${projectRoot}index.html`,
        about: `${projectRoot}about.html`,
        contact: `${projectRoot}contact.html`,
        faq: `${projectRoot}faq.html`,
        gallery: `${projectRoot}gallery.html`,
        projectDetails: `${projectRoot}project-details.html`,
        projects: `${projectRoot}projects.html`,
        services: `${projectRoot}services.html`,
        testimonials: `${projectRoot}testimonials.html`
      }
    }
  }
});
