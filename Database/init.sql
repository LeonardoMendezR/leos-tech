
CREATE TABLE IF NOT EXISTS users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(300) NOT NULL,
    last_name VARCHAR(300) NOT NULL,
    dni bigint(20) NOT NULL,
    email VARCHAR(300) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL,
    role VARCHAR(10) NOT NULL
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

INSERT INTO users (name, last_name, dni, email, password, role) VALUES
('Leonardo Tomas', 'Mendez Rodriguez', '43998614', 'leomendez@gmail.com', '$2a$10$EwlJ7rPRJPSpKtpsXchYoOs0.YpG7KAlfr42RmjECDFMelR9ICFQW', 'Admin');
