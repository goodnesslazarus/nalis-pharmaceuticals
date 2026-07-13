export function generateInvoiceHtml({ invoiceNumber, date, customer, items, total }) {
  const customerName = customer?.customerName || "-";
  const company = customer?.company || "-";
  const email = customer?.email || "-";
  const phone = customer?.phone || "-";
  const address = customer?.address || "-";

  const rows = items
    .map(
      (it, idx) => `<tr>
        <td style="padding:8px;border:1px solid #e5e7eb;text-align:left">${idx + 1}</td>
        <td style="padding:8px;border:1px solid #e5e7eb;text-align:left">${escapeHtml(it.name)}</td>
        <td style="padding:8px;border:1px solid #e5e7eb;text-align:center">${it.quantity}</td>
        <td style="padding:8px;border:1px solid #e5e7eb;text-align:right">${escapeHtml(it.price)}</td>
      </tr>`
    )
    .join("");

  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Invoice ${invoiceNumber}</title>
      <style>
        body { font-family: Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial; color: #0f172a; padding: 24px; }
        .container { max-width: 800px; margin: 0 auto; }
        .header { display:flex; justify-content:space-between; align-items:center; }
        .brand { font-weight:700; font-size:20px; }
        table { border-collapse: collapse; width:100%; margin-top:16px; }
        th { padding:8px; border:1px solid #e5e7eb; background:#f8fafc; text-align:left }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div>
            <div class="brand">Nalis Pharmaceuticals</div>
            <div style="margin-top:6px;color:#475569">Invoice ${invoiceNumber}</div>
          </div>
          <div style="text-align:right;color:#475569">
            <div>${date}</div>
            <div style="margin-top:8px">Invoice #: ${invoiceNumber}</div>
          </div>
        </div>

        <div style="display:flex;justify-content:space-between;margin-top:24px">
          <div>
            <div style="font-weight:600">Bill To</div>
            <div style="margin-top:6px">${escapeHtml(customerName)}</div>
            <div style="margin-top:2px">${escapeHtml(company)}</div>
            <div style="margin-top:2px">${escapeHtml(email)}</div>
            <div style="margin-top:2px">${escapeHtml(phone)}</div>
            <div style="margin-top:2px">${escapeHtml(address)}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:600">Total</div>
            <div style="margin-top:6px;font-size:20px;font-weight:700">₦${Number(total).toLocaleString()}</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width:48px">#</th>
              <th>Product</th>
              <th style="width:120px;text-align:center">Qty</th>
              <th style="width:140px;text-align:right">Price</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>

        <div style="margin-top:24px;color:#475569;font-size:13px">Thank you for your purchase. Please contact sales@nalis.example for support.</div>

        <div style="margin-top:24px;display:flex;gap:8px">
          <button onclick="window.print()" style="padding:10px 14px;border-radius:8px;border:1px solid #10b981;background:#10b981;color:white;cursor:pointer">Print / Save PDF</button>
          <button id="download-html" style="padding:10px 14px;border-radius:8px;border:1px solid #94a3b8;background:white;color:#0f172a;cursor:pointer">Download HTML</button>
          <button id="email-invoice" style="padding:10px 14px;border-radius:8px;border:1px solid #94a3b8;background:white;color:#0f172a;cursor:pointer">Email Invoice</button>
        </div>

        <div id="status-message" style="margin-top:16px;padding:12px;border-radius:8px;display:none"></div>
      </div>
      <script>
        (function(){
          const invoiceNumber = ${JSON.stringify(invoiceNumber)};
          const defaultEmail = ${JSON.stringify(email)};
          const statusDiv = document.getElementById('status-message');

          function showStatus(message, type) {
            const bg = type === 'success' ? '#dcfce7' : type === 'error' ? '#fee2e2' : '#fef3c7';
            const color = type === 'success' ? '#166534' : type === 'error' ? '#991b1b' : '#92400e';
            statusDiv.textContent = message;
            statusDiv.style.background = bg;
            statusDiv.style.color = color;
            statusDiv.style.display = 'block';
            setTimeout(() => { statusDiv.style.display = 'none'; }, 4000);
          }

          function downloadHtml() {
            try {
              const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `invoice-${invoiceNumber}.html`;
              document.body.appendChild(a);
              a.click();
              a.remove();
              URL.revokeObjectURL(url);
              showStatus('✓ Invoice HTML downloaded', 'success');
            } catch (e) {
              showStatus('✗ Download failed: ' + e.message, 'error');
            }
          }

          async function emailInvoice() {
            const to = defaultEmail || window.prompt('Enter recipient email for the invoice');
            if (!to) return;

            try {
              document.getElementById('email-invoice').disabled = true;
              showStatus('📧 Sending invoice...', 'info');

              const resp = await fetch('/api/send-invoice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to,
                  subject: `Invoice ${invoiceNumber}`,
                  html: document.documentElement.outerHTML,
                  invoiceNumber
                })
              });

              const data = await resp.json();
              if (resp.ok) {
                showStatus('✓ Invoice emailed successfully to ' + to, 'success');
              } else {
                showStatus('✗ Email failed: ' + (data?.error || resp.statusText), 'error');
              }
            } catch (e) {
              showStatus('✗ Email failed: ' + e.message, 'error');
            } finally {
              document.getElementById('email-invoice').disabled = false;
            }
          }

          document.getElementById('download-html')?.addEventListener('click', downloadHtml);
          document.getElementById('email-invoice')?.addEventListener('click', emailInvoice);
        })();
      </script>
    </body>
  </html>`;
}

function escapeHtml(str) {
  if (str === undefined || str === null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
