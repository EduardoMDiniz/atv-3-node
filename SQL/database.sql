estou usando o MySQL por linha de comando, deixei o arquivo do DB aqui pra explicar
que eu joguei ele pro localhost pra fazer a atividade, eu poderia ter feito os 
model do 0 e criar o banco ja que ele é pequeno mas seria barra, so joguei lá como 
o senhor viu no index


CREATE TABLE IF NOT EXISTS Banks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  anual_interest_rate FLOAT NOT NULL,
  max_installments INT NOT NULL
);

INSERT INTO Banks (name, anual_interest_rate, max_installments) VALUES
('Banco do Brasil', 6, 36),
('Caixa Econômica Federal', 12, 60),
('Bradesco', 15, 48),
('Itaú', 18, 24),
('Santander', 20, 48),
('Sicoob', 10, 72),
('Inter', 9, 60),
('Original', 16, 36),
('Nubank', 19, 24),
('Picpay', 24, 12);