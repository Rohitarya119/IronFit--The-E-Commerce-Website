#!/bin/bash
export SPRING_DATASOURCE_URL=${DB_URL:-${DATABASE_URL:-jdbc:postgresql://localhost:5432/ironfit}}
java -jar app.jar
