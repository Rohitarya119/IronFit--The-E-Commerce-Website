#!/bin/bash
echo "Starting application..."
echo "Checking DB_URL: ${DB_URL}"
echo "Checking DATABASE_URL: ${DATABASE_URL}"

# Select the available URL variable
RAW_URL=${DATABASE_URL:-${DB_URL}}

if [ -z "$RAW_URL" ]; then
     echo "WARNING: No database URL found! Defaulting to localhost..."
     RAW_URL="jdbc:postgresql://localhost:5432/ironfit"
fi

# Convert to JDBC format
if [[ "$RAW_URL" == postgres://* ]]; then
    echo "Converting postgres:// URL to JDBC URL..."
    export SPRING_DATASOURCE_URL="jdbc:${RAW_URL/postgres:\/\//postgresql:\/\/}"
elif [[ "$RAW_URL" == postgresql://* ]]; then
    echo "Converting postgresql:// URL to JDBC URL..."
    export SPRING_DATASOURCE_URL="jdbc:${RAW_URL}"
elif [[ "$RAW_URL" == jdbc:* ]]; then
    export SPRING_DATASOURCE_URL="$RAW_URL"
else
     echo "Unknown URL format: $RAW_URL"
     export SPRING_DATASOURCE_URL="$RAW_URL"
fi

echo "Final SPRING_DATASOURCE_URL: $SPRING_DATASOURCE_URL"
java -jar app.jar
