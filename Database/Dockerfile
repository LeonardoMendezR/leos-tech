FROM mysql:8

ADD init.sql /docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD=pass
ENV MYSQL_DATABASE=leosTech
ENV MYSQL_PORT=3307