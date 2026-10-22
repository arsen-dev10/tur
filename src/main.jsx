import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import './styles/admin.css';
import translations from './legacy/translations.js?raw';
import publicScript from './legacy/main.js?raw';
import adminScript from './legacy/admin.js?raw';

import home from './legacy/public/index.html?raw';
import places from './legacy/public/places.html?raw';
import mountains from './legacy/public/mountains.html?raw';
import routes from './legacy/public/routes.html?raw';
import map from './legacy/public/map.html?raw';
import reviews from './legacy/public/reviews.html?raw';
import adminLogin from './legacy/admin/index.html?raw';
import dashboard from './legacy/admin/dashboard.html?raw';
import adminPlaces from './legacy/admin/places.html?raw';
import adminRoutes from './legacy/admin/routes.html?raw';
import adminReviews from './legacy/admin/reviews.html?raw';
import settings from './legacy/admin/settings.html?raw';

const publicPages = { '': home, places, mountains, routes, map, reviews };
const adminPages = { '': adminLogin, dashboard, places: adminPlaces, routes: adminRoutes, reviews: adminReviews, settings };

function pageFromLocation() {
  const params = new URLSearchParams(window.location.search);
  const admin = params.get('admin');
  return admin !== null ? { admin: true, page: admin } : { admin: false, page: params.get('page') || '' };
}

function bodyOf(source) {
  const match = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return (match ? match[1] : source).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
}

function inlineScripts(source) {
  return [...source.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
}

function rewriteLinks(html, isAdmin) {
  return html.replace(/\b(href|action)="([^"#]+)(#[^"]*)?"/gi, (full, attr, url, anchor = '') => {
    if (/^(https?:|mailto:|tel:|javascript:|\/|\?)/i.test(url)) return full;
    const clean = url.replace(/^\.\.\//, '').replace(/\.html$/i, '');
    const target = isAdmin
      ? (url.startsWith('../') ? '?page=' + clean : '?admin=' + clean)
      : '?page=' + clean;
    return `${attr}="${target}${anchor}"`;
  });
}

function runScript(code) {
  if (!code.trim()) return;
  const script = document.createElement('script');
  script.text = code;
  document.body.appendChild(script);
  script.remove();
}

function routeScript(code, isAdmin) {
  if (!isAdmin) {
    return code.replace(/(['"])(index|places|mountains|routes|map|reviews)\.html/gi, (_, quote, page) =>
      `${quote}?page=${page === 'index' ? '' : page}`);
  }
  return code
    .replaceAll("'dashboard.html'", "'?admin=dashboard'")
    .replaceAll("'index.html'", "'?admin='");
}

function LegacyPage({ source, isAdmin, page }) {
  const initialized = useRef(false);
  const ranPageScripts = useRef(new Set());
  const html = useMemo(() => rewriteLinks(bodyOf(source), isAdmin), [source, isAdmin]);

  useEffect(() => {
    if (!initialized.current) {
      const loadedKey = isAdmin ? '__kgAdminLoaded' : '__kgPublicLoaded';
      if (!window[loadedKey]) {
        runScript(routeScript(isAdmin ? adminScript : `${translations}\n${publicScript}`, isAdmin));
        window[loadedKey] = true;
      }
      initialized.current = true;
      document.dispatchEvent(new Event('DOMContentLoaded'));
    }

    if (!isAdmin) {
      window.applyLang?.(window.getLang?.() || 'ru');
      if (page === 'places') window.initPlacesFilter?.();
      if (page === 'routes') window.initRoutesFilter?.();
      if (page === 'reviews') { window.renderReviews?.(); window.updateStats?.(); }
    }

    const id = `${isAdmin ? 'admin' : 'public'}:${page}`;
    window.__kgPageScripts ??= new Set();
    if (!ranPageScripts.current.has(id) && !window.__kgPageScripts.has(id)) {
      inlineScripts(source).forEach(code => runScript(routeScript(code, isAdmin)));
      ranPageScripts.current.add(id);
      window.__kgPageScripts.add(id);
    }
  }, [source, isAdmin, page]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function App() {
  const [route] = useState(pageFromLocation);

  const source = route.admin ? adminPages[route.page] || adminLogin : publicPages[route.page] || home;
  return <LegacyPage key={`${route.admin}:${route.page}`} source={source} isAdmin={route.admin} page={route.page} />;
}

createRoot(document.getElementById('root')).render(<App />);
