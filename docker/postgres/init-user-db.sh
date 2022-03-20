#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER furpage WITH ENCRYPTED PASSWORD 'password';
    CREATE DATABASE furpage;
    GRANT ALL PRIVILEGES ON DATABASE furpage TO furpage;
EOSQL
