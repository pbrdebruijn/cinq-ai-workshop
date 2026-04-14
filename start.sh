#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

PORT="${PORT:-8000}"
HOST="${HOST:-127.0.0.1}"
PATH_TO_OPEN="${PATH_TO_OPEN:-/presentation/presentation.html}"
NO_OPEN="${NO_OPEN:-0}"

URL="http://${HOST}:${PORT}${PATH_TO_OPEN}"

cleanup() {
  if [[ -n "${SERVER_PID:-}" ]] && kill -0 "${SERVER_PID}" >/dev/null 2>&1; then
    kill "${SERVER_PID}" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT INT TERM

cd "${ROOT_DIR}"

if command -v python3 >/dev/null 2>&1; then
  # NOTE: Keep args order compatible across Python versions: options first, port last.
  python3 -m http.server --bind "${HOST}" --directory "${ROOT_DIR}" "${PORT}" >/dev/null 2>&1 &
  SERVER_PID="$!"
else
  echo "Error: python3 not found. Install Python 3 or set up another static server."
  exit 1
fi

# Wait until server is reachable.
for _ in {1..60}; do
  if curl -fsS "${URL}" >/dev/null 2>&1; then
    break
  fi
  sleep 0.1
done

if ! curl -fsS "${URL}" >/dev/null 2>&1; then
  echo "Error: server started but ${URL} is not reachable."
  echo "Tip: try setting a different port, e.g. PORT=8001 ./start.sh"
  exit 1
fi

if [[ "${NO_OPEN}" != "1" ]] && command -v open >/dev/null 2>&1; then
  open "${URL}"
else
  echo "Open this URL in your browser:"
  echo "${URL}"
fi

echo "Serving ${URL}"
echo "Press Ctrl+C to stop."

wait "${SERVER_PID}"
