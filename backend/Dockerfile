# ============================================
# FoodExpress Backend — Production Dockerfile
# Multi-stage build with security hardening
# ============================================

# --- Build Stage ---
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# --- Production Stage ---
FROM node:22-alpine

# Security: Run as non-root user
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

WORKDIR /app

# Copy only production dependencies from builder
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Security: Remove unnecessary files
RUN rm -rf tests/ .env .git .gitignore .dockerignore

# Security: Set ownership
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/health || exit 1

CMD ["node", "server.js"]