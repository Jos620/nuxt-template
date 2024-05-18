import { THEME_KEY } from '~/lib/theme';

export default defineNitroPlugin((app) => {
  app.hooks.hook('render:html', (html, { event }) => {
    const themeCookie = getCookie(event, THEME_KEY);

    if (themeCookie === 'dark') {
      html.htmlAttrs.push('class="dark"');
    }
  });
});
