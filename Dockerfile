# Build stage
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=builder /app/dist ./dist
COPY .env.local ./

EXPOSE 3000

# Use NODE_ENV to determine which command to run
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm install && npm run dev; else npm start; fi"] 
