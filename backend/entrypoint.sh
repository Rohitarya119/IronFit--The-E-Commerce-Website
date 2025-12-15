#!/bin/bash
echo "Starting application..."
echo "Checking DB_URL: ${DB_URL}"
echo "Checking DATABASE_URL: ${DATABASE_URL}"

if [ -n "$DATABASE_URL" ]; then
    # Render provides DATABASE_URL, check if it starts with postgres:// (which needs converting to jdbc:postgresql://)
    if [[ "$DATABASE_URL" == postgres://* ]]; then
        echo "Converting postgres:// URL to JDBC URL..."
        export SPRING_DATASOURCE_URL="jdbc:${DATABASE_URL/postgres:\/\//postgresql:\/\/}"
    elif [[ "$DATABASE_URL" == jdbc:* ]]; then
        export SPRING_DATASOURCE_URL="$DATABASE_URL"
    else
         # Fallback if unsure, but usually Render gives postgres://
         export SPRING_DATASOURCE_URL="jdbc:${DATABASE_URL}"
    fi
elif [ -n "$DB_URL" ]; then
     export SPRING_DATASOURCE_URL="$DB_URL"
else
     echo "WARNING: No database URL found! Defaulting to localhost..."
     export SPRING_DATASOURCE_URL="jdbc:postgresql://localhost:5432/ironfit"
fi

echo "Using SPRING_DATASOURCE_URL: $SPRING_DATASOURCE_URL"
java -jar app.jar
