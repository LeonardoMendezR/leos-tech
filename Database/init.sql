SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

USE leosTech;
CREATE TABLE `user`
(
    `Id`       bigint(20) KEY NOT NULL AUTO_INCREMENT,
    `Name`     VARCHAR(300) NOT NULL,
    `LastName` VARCHAR(300) NOT NULL,
    `Dni`      VARCHAR(8)   NOT NULL,
    `Email`    VARCHAR(300) UNIQUE,
    `Password` VARCHAR(300) NOT NULL,
    `Role`     VARCHAR(10)  NOT NULL
);

INSERT INTO user (Name, Last_name, Dni, Email, Password, Role)
VALUES ('Leonardo Tomas', 'Mendez Rodriguez', 43998614, 'leomendez@gmail.com',
        '$2a$10$EwlJ7rPRJPSpKtpsXchYoOs0.YpG7KAlfr42RmjECDFMelR9ICFQW', 'Admin'), -- Password: admin
       ('Leonardo Carmelo', 'Morabito', 44195695, 'leonardomorabito02@gmail.com',
        '$2a$10$EwlJ7rPRJPSpKtpsXchYoOs0.YpG7KAlfr42RmjECDFMelR9ICFQW', 'Admin')
-------------------------------

CREATE TABLE portfolio
(
    `Id`          bigint(20) KEY NOT NULL AUTO_INCREMENT,
    `Name`        VARCHAR(300) NOT NULL,
    `Type`        VARCHAR(300) NOT NULL,
    `Description` VARCHAR(300) NOT NULL,
    `Link`        VARCHAR(300) NOT NULL
);
-------------------------------------
CREATE TABLE image
(
    `Id`          bigint(20) KEY NOT NULL AUTO_INCREMENT,
    `Path`        VARCHAR(300) NOT NULL,
    `PortfolioId` INT,
    FOREIGN KEY (PortfolioId) REFERENCES portfolio (Id)
);
------------------------------------
CREATE TABLE servicio
(
    `Id`       bigint(20) KEY NOT NULL AUTO_INCREMENT,
    `NameTech` VARCHAR(300) NOT NULL,
    `Area`     VARCHAR(300) NOT NULL
);
-------------------
ALTER TABLE `user`
    ADD PRIMARY KEY (`Id`),
    ADD UNIQUE KEY `Email` (`Email`);

ALTER TABLE `portfolio`
    ADD PRIMARY KEY (`Id`) ,
ALTER TABLE `image`
    ADD PRIMARY KEY (`Id`) ,

ALTER TABLE `servicio`
    ADD PRIMARY KEY (`Id`),

COMMIT;