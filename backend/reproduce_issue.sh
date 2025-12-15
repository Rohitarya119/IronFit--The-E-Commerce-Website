#!/bin/bash

# Base URL
BASE_URL="http://localhost:8085/api"

# 1. Register a new user (random email to avoid conflict)
EMAIL="test_$(date +%s)@example.com"
PASSWORD="password123"
echo "Registering user: $EMAIL"
curl -s -X POST "$BASE_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\", \"password\":\"$PASSWORD\", \"fullName\":\"Test User\"}"
echo -e "\n"

# 2. Login to get token
echo "Logging in..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\", \"password\":\"$PASSWORD\"}")

echo "Login Response: $LOGIN_RESPONSE"
TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -z "$TOKEN" ]; then
  echo "Failed to get token"
  exit 1
fi

echo "Got Token: $TOKEN"

# 3. Add to Cart
echo "Adding to Cart..."
curl -v -X POST "$BASE_URL/cart/add" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d "{\"productId\": 1, \"quantity\": 1}"
