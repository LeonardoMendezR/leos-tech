CREATE TABLE IF NOT EXISTS users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(300) NOT NULL,
    last_name VARCHAR(300) NOT NULL,
    dni VARCHAR(8) NOT NULL,
    email VARCHAR(300) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL,
    role VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS images (
	id INT PRIMARY KEY AUTO_INCREMENT,
    path VARCHAR(300) NOT NULL,
    hotel_id INT,
    FOREIGN KEY (hotel_id) REFERENCES hotels(id) ON DELETE CASCADE	
);

INSERT INTO users (name, last_name, dni, email, password, role) VALUES
('Leonardo Tomas', 'Mendez Rodriguez', '43998614', 'leomendez@gmail.com', '$2a$10$EwlJ7rPRJPSpKtpsXchYoOs0.YpG7KAlfr42RmjECDFMelR9ICFQW', 'Admin'), -- Password: admin

INSERT INTO images (path, hotel_id) VALUES

