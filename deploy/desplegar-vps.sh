#!/bin/bash
# Lo ejecuta /usr/local/bin/desplegar en el VPS, desde la raíz del repo, tras el git reset.
# nginx sirve dist/ en consultorialocal.es/dev-steban-portfolio/.
set -euo pipefail
npm ci --no-audit --no-fund
npm run build
