#!/bin/bash
echo "Starting application..."

# Select the available URL variable
RAW_URL=${DATABASE_URL:-${DB_URL}}

if [ -z "$RAW_URL" ]; then
     echo "WARNING: No database URL found! Defaulting to localhost..."
     export SPRING_DATASOURCE_URL="jdbc:postgresql://localhost:5432/ironfit"
elif [[ "$RAW_URL" == postgres://* ]] || [[ "$RAW_URL" == postgresql://* ]]; then
    echo "Detected Render/Postgres URL format. Parsing credentials..."
    
    # Remove protocol
    NO_PROTO=$(echo "$RAW_URL" | sed -E 's/^(postgres|postgresql):\/\///')
    
    # Extract Host/DB (Everything after the last @)
    HOST_PATH=${NO_PROTO##*@}
    
    # Extract User/Pass (Everything before the last @)
    USER_PASS=${NO_PROTO%@*}
    
    # Split User and Pass (User is before first colon)
    DB_USER=${USER_PASS%%:*}
    DB_PASS=${USER_PASS#*:}
    
    # Export separate variables which Spring Boot prefers
    export SPRING_DATASOURCE_URL="jdbc:postgresql://$HOST_PATH"
    export SPRING_DATASOURCE_USERNAME="$DB_USER"
    export SPRING_DATASOURCE_PASSWORD="$DB_PASS"
    
    echo "Converted to: $SPRING_DATASOURCE_URL"
    echo "Detected User: $DB_USER"
else
    # Assume it's already a valid JDBC URL or other format
    export SPRING_DATASOURCE_URL="$RAW_URL"
fi

java -jar app.jar
