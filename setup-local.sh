#!/bin/bash

# ═══════════════════════════════════════════
# 🐙 OCTOPUS — Full Local Setup Script
# ═══════════════════════════════════════════
#
# This script sets up both the Strapi CMS and
# connects it to your Next.js frontend.
#
# Prerequisites:
#   - Node.js 18 or 20
#   - npm
#
# Usage:
#   chmod +x setup-local.sh
#   ./setup-local.sh
#
# ═══════════════════════════════════════════

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
CMS_DIR="$(dirname "$SCRIPT_DIR")/octopus-cms"

echo ""
echo "🐙 OCTOPUS — Local Setup"
echo "═══════════════════════════════════════════"
echo ""

# Check Node version
NODE_VERSION=$(node -v 2>/dev/null | cut -d'v' -f2 | cut -d'.' -f1)
if [ -z "$NODE_VERSION" ] || [ "$NODE_VERSION" -lt 18 ]; then
  echo "❌ Node.js 18+ is required. Current: $(node -v 2>/dev/null || echo 'not installed')"
  exit 1
fi
echo "✓ Node.js $(node -v)"

# Step 1: Create Strapi project
echo ""
echo "Step 1/4: Creating Strapi CMS..."
echo ""

if [ -d "$CMS_DIR" ]; then
  echo "  ⚠ octopus-cms already exists at $CMS_DIR"
  echo "  Skipping Strapi creation."
else
  cd "$(dirname "$SCRIPT_DIR")"
  npx create-strapi-app@latest octopus-cms --quickstart --no-run
  echo "  ✓ Strapi project created"
fi

# Step 2: Run the content type setup script
echo ""
echo "Step 2/4: Creating content types..."
echo ""

cp "$SCRIPT_DIR/setup-strapi.mjs" "$CMS_DIR/setup-strapi.mjs"
cd "$CMS_DIR"
node setup-strapi.mjs

# Step 3: Set up frontend env
echo ""
echo "Step 3/4: Configuring Next.js frontend..."
echo ""

if [ ! -f "$SCRIPT_DIR/.env.local" ]; then
  cat > "$SCRIPT_DIR/.env.local" << EOF
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
NEXT_PUBLIC_GA_ID=
EOF
  echo "  ✓ Created .env.local (you'll add the API token later)"
else
  echo "  ⚠ .env.local already exists, skipping"
fi

# Step 4: Install frontend deps if needed
echo ""
echo "Step 4/4: Installing frontend dependencies..."
echo ""

cd "$SCRIPT_DIR"
if [ ! -d "node_modules" ]; then
  npm install
  echo "  ✓ Dependencies installed"
else
  echo "  ⚠ node_modules exists, skipping install"
fi

# Done
echo ""
echo "═══════════════════════════════════════════"
echo "  ✅ SETUP COMPLETE!"
echo "═══════════════════════════════════════════"
echo ""
echo "  Now follow these steps:"
echo ""
echo "  1. START STRAPI (Terminal 1):"
echo "     cd $CMS_DIR"
echo "     npm run develop"
echo ""
echo "  2. CREATE ADMIN ACCOUNT:"
echo "     Open http://localhost:1337/admin"
echo "     Create your first admin user"
echo ""
echo "  3. SET PERMISSIONS:"
echo "     Settings → Users & Permissions → Roles → Public"
echo "     See the setup-strapi.mjs output for details"
echo ""
echo "  4. CREATE API TOKEN:"
echo "     Settings → API Tokens → Create new"
echo "     Copy the token"
echo ""
echo "  5. SEED DATA:"
echo "     STRAPI_TOKEN=your_token node $CMS_DIR/scripts/seed.js"
echo ""
echo "  6. ADD TOKEN TO FRONTEND:"
echo "     Edit $SCRIPT_DIR/.env.local"
echo "     Paste your token as STRAPI_API_TOKEN=..."
echo ""
echo "  7. START FRONTEND (Terminal 2):"
echo "     cd $SCRIPT_DIR"
echo "     npm run dev"
echo ""
echo "  Then open:"
echo "    🌐 Website:  http://localhost:3000"
echo "    📋 CMS:      http://localhost:1337/admin"
echo ""
echo "═══════════════════════════════════════════"
echo ""
