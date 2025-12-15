#!/bin/bash
echo "Starting application..."

# Select the available URL variable
RAW_URL=${DATABASE_URL:-${DB_URL}}

if [ -z "$RAW_URL" ]; then
     echo "WARNING: No database URL found! Defaulting to localhost..."
     export SPRING_DATASOURCE_URL="jdbc:postgresql://localhost:5432/ironfit"
else
    # Clean up the URL:
    # 1. Remove any existing prefix like jdbc:, postgres://, postgresql://
    # 2. Add the correct jdbc:postgresql:// prefix
    
    CLEAN_URL=$(echo "$RAW_URL" | sed -E 's/^(jdbc:)?(postgres|postgresql):\/\///')
    export SPRING_DATASOURCE_URL="jdbc:postgresql://$CLEAN_URL"
fi

echo "Final SPRING_DATASOURCE_URL: $SPRING_DATASOURCE_URL"
java -jar app.jar
