FROM golang:latest

ADD . /backend

WORKDIR /backend
RUN go mod init project
RUN go mod tidy
RUN go build -o project .
RUN go test ./...
RUN chmod +x /backend

ENV DB_DATABASE=leosTech
ENV DB_USERNAME=root
ENV DB_PASSWORD=pass
ENV DB_HOST=database
ENV DB_PORT=3307
EXPOSE 8090

ENTRYPOINT ["/backend/project"]
