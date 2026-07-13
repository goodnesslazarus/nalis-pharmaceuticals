import puppeteer from 'puppeteer';

export async function htmlToPdf(htmlContent) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle2' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      margin: { top: '0.4in', right: '0.4in', bottom: '0.4in', left: '0.4in' },
    });

    return pdfBuffer;
  } catch (err) {
    throw new Error(`PDF generation failed: ${err.message}`);
  } finally {
    if (browser) await browser.close();
  }
}
