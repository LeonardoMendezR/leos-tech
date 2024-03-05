FROM mysql:latest

ADD init.sql /docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD=pass
ENV DB_USERNAME=root
ENV DB_HOST=database
ENV MYSQL_DATABASE=leosTech
ENV MYSQL_PORT=3307