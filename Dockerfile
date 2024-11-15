# Stage 1: Build the Next.js client
FROM node:18 AS builder
WORKDIR /app/src
COPY src/package.json src/package-lock.json ./
RUN npm install
COPY src .  

# Stage 2: Run both the client and server
FROM node:18
WORKDIR /app

# Copy built Next.js client files from the builder stage
COPY --from=builder /app/src /app/src

# Install server dependencies
WORKDIR /app/server
COPY server/package.json server/package-lock.json ./
RUN npm install

# Copy server files
COPY server . 

# Set environment variables
ENV PORT=4000

# Expose ports
EXPOSE 3000
EXPOSE 4000

# Start the Next.js and Express.js apps concurrently
CMD ["npm", "run", "dev"]
