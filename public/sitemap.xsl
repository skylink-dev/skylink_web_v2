<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">

    <xsl:output method="html" indent="yes" encoding="UTF-8"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>XML Sitemap | Skylink Fiber</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <style type="text/css">
                    :root {
                    --primary-color: #ff0033;
                    --secondary-color: #001e3c;
                    --accent-color: #0077b6;
                    --light-gray: #f8f9fa;
                    --medium-gray: #e9ecef;
                    --dark-gray: #343a40;
                    --white: #ffffff;
                    }

                    body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open
                    Sans', 'Helvetica Neue', sans-serif;
                    color: var(--dark-gray);
                    margin: 0;
                    padding: 0;
                    background-color: var(--light-gray);
                    }

                    .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    }

                    header {
                    background-color: var(--secondary-color);
                    color: var(--white);
                    padding: 2rem 0;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }

                    h1 {
                    margin: 0;
                    padding: 0;
                    font-size: 28px;
                    }

                    .brand-name {
                    color: var(--primary-color);
                    }

                    .subtitle {
                    margin: 10px 0 0;
                    font-size: 16px;
                    font-weight: 300;
                    color: rgba(255, 255, 255, 0.8);
                    }

                    .stats {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    background-color: var(--white);
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    }

                    .stat-item {
                    flex: 1;
                    min-width: 200px;
                    }

                    .stat-value {
                    font-size: 24px;
                    font-weight: 700;
                    color: var(--primary-color);
                    }

                    .stat-label {
                    font-size: 14px;
                    color: var(--dark-gray);
                    margin-top: 5px;
                    }

                    table {
                    width: 100%;
                    border-collapse: collapse;
                    background-color: var(--white);
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    }

                    thead {
                    background-color: var(--secondary-color);
                    color: var(--white);
                    }

                    th {
                    text-align: left;
                    padding: 15px;
                    font-weight: 600;
                    text-transform: uppercase;
                    font-size: 14px;
                    }

                    td {
                    padding: 12px 15px;
                    border-bottom: 1px solid var(--medium-gray);
                    }

                    tr:hover {
                    background-color: var(--light-gray);
                    }

                    .priority-col {
                    width: 100px;
                    text-align: center;
                    }

                    .changefreq-col {
                    width: 150px;
                    text-align: center;
                    }

                    .lastmod-col {
                    width: 200px;
                    text-align: center;
                    }

                    .badge {
                    display: inline-block;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    }

                    .badge-primary {
                    background-color: var(--primary-color);
                    color: var(--white);
                    }

                    .badge-secondary {
                    background-color: var(--accent-color);
                    color: var(--white);
                    }

                    .badge-light {
                    background-color: var(--medium-gray);
                    color: var(--dark-gray);
                    }

                    .priority-high {
                    background-color: #d90429;
                    color: white;
                    }

                    .priority-medium {
                    background-color: #fb8500;
                    color: white;
                    }

                    .priority-low {
                    background-color: #4cc9f0;
                    color: white;
                    }

                    a {
                    color: var(--accent-color);
                    text-decoration: none;
                    transition: color 0.2s;
                    }

                    a:hover {
                    color: var(--primary-color);
                    text-decoration: underline;
                    }

                    .category {
                    display: inline-block;
                    margin-right: 8px;
                    padding: 3px 8px;
                    border-radius: 4px;
                    font-size: 11px;
                    background-color: var(--medium-gray);
                    }

                    .footer {
                    margin-top: 30px;
                    text-align: center;
                    padding: 20px 0;
                    color: var(--dark-gray);
                    font-size: 14px;
                    }

                    @media (max-width: 768px) {
                    .container {
                    padding: 10px;
                    }

                    header {
                    padding: 1.5rem 0;
                    }

                    h1 {
                    font-size: 24px;
                    }

                    .stats {
                    gap: 10px;
                    }

                    .stat-item {
                    flex: 1 0 100%;
                    }

                    table {
                    display: block;
                    overflow-x: auto;
                    }

                    th, td {
                    padding: 10px;
                    }

                    .category {
                    margin-bottom: 4px;
                    }
                    }
                </style>
            </head>
            <body>
                <header>
                    <div class="container">
                        <h1>
                            <span class="brand-name">Skylink</span>
                            Fiber XML Sitemap
                        </h1>
                        <p class="subtitle">This is a sitemap generated to help search engines index this website more
                            efficiently.
                        </p>
                    </div>
                </header>

                <div class="container">
                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-value">
                                <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
                            </div>
                            <div class="stat-label">Total URLs</div>
                        </div>

                        <div class="stat-item">
                            <div class="stat-value">
                                <xsl:value-of
                                        select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/blogs')])"/>
                            </div>
                            <div class="stat-label">Blog Posts</div>
                        </div>

                        <div class="stat-item">
                            <div class="stat-value">
                                <xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.9])"/>
                            </div>
                            <div class="stat-label">High Priority Pages</div>
                        </div>

                        <div class="stat-item">
                            <div class="stat-value">
                                <xsl:value-of select="substring(sitemap:urlset/sitemap:url[1]/sitemap:lastmod, 1, 10)"/>
                            </div>
                            <div class="stat-label">Last Updated</div>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>URL</th>
                                <th class="lastmod-col">Last Modified</th>
                                <th class="changefreq-col">Change Frequency</th>
                                <th class="priority-col">Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sitemap:urlset/sitemap:url">
                                <tr>
                                    <td>
                                        <a href="{sitemap:loc}">
                                            <xsl:value-of
                                                    select="substring-after(sitemap:loc, 'process.env.NEXT_PUBLIC_BASE_URL')"/>
                                        </a>
                                        <xsl:if test="contains(sitemap:loc, '/internet')">
                                            <span class="category">Internet</span>
                                        </xsl:if>
                                        <xsl:if test="contains(sitemap:loc, '/tv')">
                                            <span class="category">TV</span>
                                        </xsl:if>
                                        <xsl:if test="contains(sitemap:loc, '/ott') or contains(sitemap:loc, '/firestick')">
                                            <span class="category">OTT</span>
                                        </xsl:if>
                                        <xsl:if test="contains(sitemap:loc, '/plans') or contains(sitemap:loc, '/packages') or contains(sitemap:loc, '/deals')">
                                            <span class="category">Plans</span>
                                        </xsl:if>
                                        <xsl:if test="contains(sitemap:loc, '/products')"> <!-- Changed from: contains(sitemap:loc, '/products') or contains(sitemap:loc, '/accessories') -->
                                            <span class="category">Products</span>
                                        </xsl:if>
                                        <xsl:if test="contains(sitemap:loc, '/blogs')">
                                            <span class="category">Blog</span>
                                        </xsl:if>
                                        <xsl:if test="contains(sitemap:loc, '/support') or contains(sitemap:loc, '/installation') or contains(sitemap:loc, '/speedtest')">
                                            <span class="category">Support</span>
                                        </xsl:if>
                                        <xsl:if test="contains(sitemap:loc, '/terms') or contains(sitemap:loc, '/policy') or contains(sitemap:loc, '/refund') or contains(sitemap:loc, '/subscription-contract') or contains(sitemap:loc, '/whistleblower')">
                                            <span class="category">Legal</span>
                                        </xsl:if>
                                        <xsl:if test="contains(sitemap:loc, '/coimbatore') or contains(sitemap:loc, '/erode') or contains(sitemap:loc, '/tiruppur')">
                                            <span class="category">Location</span>
                                        </xsl:if>
                                    </td>
                                    <td class="lastmod-col">
                                        <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                                    </td>
                                    <td class="changefreq-col">
                                        <span>
                                            <xsl:attribute name="class">
                                                <xsl:text>badge</xsl:text>
                                                <xsl:choose>
                                                    <xsl:when test="sitemap:changefreq = 'weekly'">badge-primary
                                                    </xsl:when>
                                                    <xsl:when test="sitemap:changefreq = 'monthly'">badge-secondary
                                                    </xsl:when>
                                                    <xsl:otherwise>badge-light</xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:attribute>
                                            <xsl:value-of select="sitemap:changefreq"/>
                                        </span>
                                    </td>
                                    <td class="priority-col">
                                        <span>
                                            <xsl:attribute name="class">
                                                <xsl:text>badge</xsl:text>
                                                <xsl:choose>
                                                    <xsl:when test="sitemap:priority >= 0.9">priority-high</xsl:when>
                                                    <xsl:when test="sitemap:priority >= 0.7">priority-medium</xsl:when>
                                                    <xsl:otherwise>priority-low</xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:attribute>
                                            <xsl:value-of select="sitemap:priority"/>
                                        </span>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>

                    <div class="footer">
                        <p>©
                            <xsl:value-of select="year-from-date(current-date())"/>
                            Skylink Fiber. All rights reserved. This sitemap was generated on<xsl:value-of
                                    select="format-date(current-date(), '[D] [MNn] [Y]')"/>.
                        </p>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>