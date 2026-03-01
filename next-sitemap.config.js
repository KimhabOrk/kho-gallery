/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://gallery.kimhabork.site',
  changefreq: 'weekly',
  priority: 1,
  sitemapSize: 5000,
  generateRobotsTxt: false,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  }
}
