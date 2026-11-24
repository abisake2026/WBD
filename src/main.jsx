import React, { useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import parse from 'html-react-parser';
import './styles.css';

import aboutSource from './content/about.html?raw';
import contactSource from './content/contact.html?raw';
import faqSource from './content/faq.html?raw';
import gallerySource from './content/gallery.html?raw';
import homeSource from './content/index.html?raw';
import projectDetailsSource from './content/project-details.html?raw';
import projectsSource from './content/projects.html?raw';
import servicesSource from './content/services.html?raw';
import testimonialsSource from './content/testimonials.html?raw';

import '../js/navigation.js';
import '../js/projects.js';
import '../js/gallery.js';
import '../js/testimonials.js';
import '../js/services-slider.js';
import '../js/faq.js';
import '../js/contact.js';
import '../js/main.js';
import '../js/animations.js';

const pageSources = {
  'about.html': aboutSource,
  'contact.html': contactSource,
  'faq.html': faqSource,
  'gallery.html': gallerySource,
  'index.html': homeSource,
  'project-details.html': projectDetailsSource,
  'projects.html': projectsSource,
  'services.html': servicesSource,
  'testimonials.html': testimonialsSource
};

function getCurrentPage() {
  const fileName = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  return pageSources[fileName] ? fileName : 'index.html';
}

function App() {
  const pageName = getCurrentPage();
  const page = useMemo(() => {
    const parsedDocument = new DOMParser().parseFromString(pageSources[pageName], 'text/html');
    parsedDocument.body.querySelectorAll('script').forEach(script => script.remove());
    parsedDocument.body.querySelectorAll('[src=""]').forEach(element => element.removeAttribute('src'));
    parsedDocument.body.querySelectorAll('option[selected]').forEach(option => option.removeAttribute('selected'));
    return {
      markup: parsedDocument.body.innerHTML,
      bodyClass: parsedDocument.body.className,
      title: parsedDocument.title,
      description: parsedDocument.querySelector('meta[name="description"]')?.content ?? '',
      canonical: parsedDocument.querySelector('link[rel="canonical"]')?.href ?? '',
      structuredData: parsedDocument.head.querySelector('script[type="application/ld+json"]')?.textContent ?? ''
    };
  }, [pageName]);

  useEffect(() => {
    document.title = page.title;
    document.body.className = page.bodyClass;

    let description = document.head.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.append(description);
    }
    description.content = page.description;

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (page.canonical) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.append(canonical);
      }
      canonical.href = page.canonical;
    } else {
      canonical?.remove();
    }

    document.head.querySelector('#react-page-structured-data')?.remove();
    if (page.structuredData) {
      const structuredData = document.createElement('script');
      structuredData.id = 'react-page-structured-data';
      structuredData.type = 'application/ld+json';
      structuredData.textContent = page.structuredData;
      document.head.append(structuredData);
    }

    document.dispatchEvent(new Event('DOMContentLoaded'));
  }, [page]);

  return (
    <>
      {parse(page.markup, {
        replace(node) {
          if (node.type === 'tag' && node.attribs.fetchpriority) {
            node.attribs.fetchPriority = node.attribs.fetchpriority;
            delete node.attribs.fetchpriority;
          }
        }
      })}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
