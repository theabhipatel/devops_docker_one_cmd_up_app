#!/bin/sh

set -e

if [ -z "$DOMAIN" ]; then
  echo "❌ Error: DOMAIN variable is not set. Please add in .env file."
  exit 1
fi

CERT_PATH="/etc/letsencrypt/live/$DOMAIN/fullchain.pem"
CONF_PATH="/etc/nginx/conf.d/default.conf"

HTTP_TEMPLATE="/etc/nginx/templates/http.template"
HTTPS_TEMPLATE="/etc/nginx/templates/https.template"

echo "⚙️ Generating HTTP-only config for Nginx..."
# Step 1: temporary HTTP-only config (for Certbot initial issuance)
sed "s/{{DOMAIN}}/$DOMAIN/g" "$HTTP_TEMPLATE" > "$CONF_PATH"

echo "🚀 Starting temporary Nginx (HTTP only)..."
nginx &

# Step 2: wait until SSL certificate exists
echo "🕒 Waiting for SSL certificate for $DOMAIN..."
while [ ! -f "$CERT_PATH" ]; do
  sleep 2
done

echo "🔐 SSL certificate found — enabling HTTPS with redirect..."

# Step 3: overwrite Nginx config with HTTPS + redirect
sed "s/{{DOMAIN}}/$DOMAIN/g" "$HTTPS_TEMPLATE" > "$CONF_PATH"

echo "♻️ Restarting Nginx with SSL + Redirect..."
nginx -s quit || true
nginx -g "daemon off;"
