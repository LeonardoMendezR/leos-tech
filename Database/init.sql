SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

USE leosTech;

CREATE TABLE IF NOT EXISTS users
(
    Id       bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Name     VARCHAR(300) NOT NULL,
    LastName VARCHAR(300) NOT NULL,
    Dni      bigint(20)   NOT NULL,
    Email    VARCHAR(300) UNIQUE NOT NULL ,
    Password VARCHAR(300) NOT NULL,
    Role     VARCHAR(10)  NOT NULL
);

CREATE TABLE IF NOT EXISTS portfolios
(
    Id          bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Name        VARCHAR(300) NOT NULL,
    Type        VARCHAR(300) NOT NULL,
    Description VARCHAR(300) NOT NULL,
    Link        VARCHAR(300) NOT NULL
);
CREATE TABLE IF NOT EXISTS images
(
    Id          bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Path        VARCHAR(300) NOT NULL,
    PortfolioId bigint(20),
    FOREIGN KEY (PortfolioId) REFERENCES portfolios (Id)

);

CREATE TABLE IF NOT EXISTS servicios
(
    Id       bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    NameTech VARCHAR(300) NOT NULL,
    Area     VARCHAR(300) NOT NULL
);

INSERT INTO users (Name, LastName, Dni, Email, Password, Role)
VALUES ('Leonardo Tomas', 'Mendez Rodriguez', 43998614, 'leomendez@gmail.com',
        '$2a$10$EwlJ7rPRJPSpKtpsXchYoOs0.YpG7KAlfr42RmjECDFMelR9ICFQW', 'Admin'); -- Password: admin


