docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ready2use-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t ready2use-java/app ../../..
