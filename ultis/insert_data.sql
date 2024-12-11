-- Insert data vào bảng roles
INSERT INTO roles (role_name) VALUES 
('Admin'), 
('Customer');

-- Insert data vào bảng accounts
INSERT INTO accounts (role_id, username, hashed_password) VALUES 
(1, 'admin', '$2a$12$rtojhl063ZE.kuqRpFkFqetaSq5H2LgsEx1Q3I6aw38VpJ3/LrOvG'), 
(2, 'customer1', '$2a$12$rtojhl063ZE.kuqRpFkFqetaSq5H2LgsEx1Q3I6aw38VpJ3/LrOvG');

-- Insert data vào bảng users
INSERT INTO users (full_name, email, birthday, address, phone_number, gender, account_id) VALUES 
('John Doe', 'johndoe@example.com', '1990-01-01', '123 Main St', '1234567890', 'Male', 1),
('Bob Brown', 'bobbrown@example.com', '1992-03-03', '789 Pine St', '1029384756', 'Male', 2);

-- Insert data vào bảng categories
INSERT INTO categories (category_name) VALUES 
('fruit'), 
('vegetable'), 
('root'),
('sweet cake'),
('salty cake ');

-- Insert data vào bảng products
INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url, origin, old_price, discount_percents) VALUES
('Avocado 1kg', 1, 100, 'Fresh avocado, perfect for smoothies and salads', 75000, 65000, '/public/images/products/bo.png', 'Vietnam', 0, 0),
('Pomegranate 1kg', 1, 50, 'Juicy pomegranate, rich in antioxidants', 70000, 60000, '/public/images/products/luu.png', 'Vietnam', 0, 0),
('Australian orange 1kg', 1, 120, 'Sweet Australian oranges, perfect for juice', 50000, 45000, '/public/images/products/camUc.png', 'Australia', 55000, 18),
('Strawberry 1kg', 1, 200, 'Fresh strawberries, sweet and tangy', 60000, 50000, '/public/images/products/dautay.png', 'Vietnam', 65000, 23),
('Water Melon 1kg', 1, 60, 'Large and juicy watermelons', 110000, 100000, '/public/images/products/duahaudo.png', 'Vietnam', 120000, 17),
('Persimmon 1kg', 1, 80, 'Sweet and ripe persimmons', 65000, 55000, '/public/images/products/hong.png', 'Vietnam', 70000, 21),
('Star Fruit 1kg', 1, 90, 'Unique star-shaped fruit with a tangy flavor', 45000, 40000, '/public/images/products/khe.png', 'Vietnam', 50000, 20),
('Kiwi 1kg', 1, 70, 'Fresh and tangy kiwis', 35000, 30000, '/public/images/products/kiwi.png', 'New Zealand', 0, 0),
('Pear 1kg', 1, 100, 'Crisp and juicy pears', 40000, 35000, '/public/images/products/le.png', 'Vietnam', 45000, 22),
('Pomelo 1kg', 1, 40, 'Large pomelos, mildly sweet and tangy', 70000, 60000, '/public/images/products/buoi.png', 'Vietnam', 75000, 20),
('Passion Fruit 1kg', 1, 75, 'Exotic passion fruits, rich in flavor', 55000, 50000, '/public/images/products/chanhday.png', 'Vietnam', 60000, 17),
('Longan 1kg', 1, 150, 'Sweet and juicy longans', 45000, 40000, '/public/images/products/nhan.png', 'Vietnam', 50000, 20),
('Grape 1kg', 1, 200, 'Fresh and sweet grapes', 75000, 65000, '/public/images/products/nho.png', 'Vietnam', 80000, 19),
('Mangosteen 1kg', 1, 60, 'Exotic mangosteen with sweet and tangy flavor', 120000, 110000, '/public/images/products/mangcut.png', 'Vietnam', 0, 0),
('Soursop 1kg', 1, 30, 'Unique soursop with a tropical flavor', 100000, 90000, '/public/images/products/mangcau.png', 'Vietnam', 110000, 9),
('Lychee 1kg', 1, 120, 'Sweet and juicy lychees', 65000, 55000, '/public/images/products/vaithieu.png', 'Vietnam', 70000, 21),
('Pink Guava 1kg', 1, 80, 'Fresh pink guava, rich in vitamin C', 50000, 45000, '/public/images/products/oihong.png', 'Vietnam', 0, 0),
('DaLat Grape 1kg', 1, 90, 'Special grapes from DaLat', 85000, 75000, '/public/images/products/nhoDalat.png', 'Vietnam', 90000, 12),
('Red Apple 1kg', 1, 100, 'Crisp and sweet red apples', 55000, 50000, '/public/images/products/taodo.png', 'Vietnam', 60000, 17),
('Durian 1kg', 1, 20, 'The king of fruits, rich and creamy', 150000, 135000, '/public/images/products/sauriengvang.png', 'Vietnam', 160000, 8);

INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url, origin, old_price, discount_percents) VALUES
('Corn 1kg', 2, 150, 'Fresh and sweet corn, ideal for grilling or soups', 20000, 18000, '/public/images/products/bap.png', 'Vietnam', 22000, 18),
('Cabbage 1kg', 2, 120, 'Green cabbage, crisp and fresh', 15000, 12000, '/public/images/products/bapcai.png', 'Vietnam', 18000, 20),
('Napa Cabbage 1kg', 2, 100, 'Fresh napa cabbage, perfect for hot pot and stir-fry', 25000, 20000, '/public/images/products/caithao.png', 'Vietnam', 28000, 20),
('Winter melon 1kg', 2, 80, 'Large winter melon, perfect for soups', 30000, 25000, '/public/images/products/bidao.png', 'Vietnam', 0, 0),
('Fish mint 1kg', 2, 200, 'Fresh fish mint, ideal for salads', 10000, 8000, '/public/images/products/diepca.png', 'Vietnam', 12000, 20),
('Bok choy 1kg', 2, 100, 'Crisp bok choy, ideal for stir-fry or steaming', 18000, 15000, '/public/images/products/caithia.png', 'Vietnam', 21000, 17),
('Spinach 1kg', 2, 120, 'Fresh spinach, rich in iron and nutrients', 20000, 18000, '/public/images/products/caixanh.png', 'Vietnam', 23000, 10),
('Tomato 1kg', 2, 200, 'Juicy tomatoes, perfect for salads and sauces', 15000, 12000, '/public/images/products/cachua.png', 'Vietnam', 17000, 20),
('Bitter melon 1kg', 2, 90, 'Fresh bitter melon, great for stir-fry or soup', 18000, 15000, '/public/images/products/khoqua.png', 'Vietnam', 20000, 17),
('Cucumber 1kg', 2, 150, 'Crisp cucumbers, great for salads and snacks', 12000, 10000, '/public/images/products/dualeo.png', 'Vietnam', 0, 0),
('Mushroom 1kg', 2, 70, 'Fresh mushrooms, perfect for soups or stir-fry', 35000, 30000, '/public/images/products/namtuoi.png', 'Vietnam', 40000, 14),
('Bell pepper 1kg', 2, 100, 'Crisp and sweet bell peppers in various colors', 25000, 20000, '/public/images/products/otchuong.png', 'Vietnam', 30000, 20),
('Broccoli 1kg', 2, 80, 'Fresh broccoli, rich in vitamins', 40000, 35000, '/public/images/products/su.png', 'Vietnam', 45000, 12),
('Pineapple 1kg', 2, 60, 'Fresh pineapple, perfect for desserts or smoothies', 25000, 22000, '/public/images/products/thom.png', 'Vietnam', 28000, 12),
('Lettuce 1kg', 2, 150, 'Crisp lettuce, perfect for salads', 15000, 12000, '/public/images/products/xalach.png', 'Vietnam', 17000, 20);

INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url, origin) VALUES
('Carrot 1kg', 3, 120, 'Fresh and crunchy carrots, rich in beta-carotene', 20000, 18000, '/public/images/products/carot.png', 'Vietnam'),
('Purple Radish 1kg', 3, 100, 'Fresh purple radish, perfect for pickling or salads', 25000, 22000, '/public/images/products/cucaitim.png', 'Vietnam'),
('Ginger 1kg', 3, 80, 'Fresh ginger root, great for cooking or tea', 30000, 28000, '/public/images/products/cugung.png', 'Vietnam'),
('Turmeric 1kg', 3, 70, 'Fresh turmeric root, rich in antioxidants', 35000, 32000, '/public/images/products/cunghe.png', 'Vietnam'),
('Sweet Potato 1kg', 3, 150, 'Sweet and starchy sweet potatoes, perfect for roasting or boiling', 18000, 15000, '/public/images/products/khoailang.png', 'Vietnam');

INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url, origin) VALUES
('Choux (1 piece)', 4, 80, 'Light and airy choux pastries filled with cream', 35000, 30000, '/public/images/products/choux.png', 'France'),
('Cupcake (1 piece)', 4, 100, 'Delicious cupcakes with frosting, perfect for any occasion', 25000, 22000, '/public/images/products/cupcake.png', 'USA'),
('Birthday Cake (whole)', 4, 50, 'Special birthday cakes with customizable designs', 200000, 180000, '/public/images/products/banhkem.png', 'Vietnam'),
('Waffle (1 piece)', 4, 120, 'Crispy waffles, perfect with syrup or fresh fruits', 30000, 25000, '/public/images/products/waffle.png', 'Belgium'),
('Donut (1 piece)', 4, 150, 'Sweet and soft donuts with various toppings', 20000, 18000, '/public/images/products/donut.png', 'USA'),
('Brownies (1 piece)', 4, 90, 'Rich and fudgy brownies, ideal for chocolate lovers', 40000, 35000, '/public/images/products/brownies.png', 'USA'),
('Muffin (1 piece)', 4, 100, 'Soft and moist muffins with various flavors', 25000, 20000, '/public/images/products/muffin.png', 'USA'),
('Cookies (1 pack)', 4, 200, 'Crunchy and delicious cookies in assorted flavors', 15000, 12000, '/public/images/products/cookies.png', 'USA');

INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url, origin) VALUES
('Croissant (1 piece)', 5, 100, 'Flaky and buttery croissants, perfect for breakfast', 25000, 20000, '/public/images/products/croissant.png', 'France'),
('Salted Egg Sponge Cake (1 piece)', 5, 80, 'Soft sponge cake with a rich salted egg yolk flavor', 35000, 30000, '/public/images/products/salted.png', 'Vietnam');

-- Insert data vào bảng status
INSERT INTO status (status_name, icon, color) VALUES 
('Pending', '<i class="fas fa-hourglass-half"></i>', '#FFA500'), 
('Verified', '<i class="fas fa-check-circle"></i>', '#00FF00'), 
('To Delivery', '<i class="fas fa-truck"></i>', '#0000FF'), 
('Completed', '<i class="fas fa-check"></i>', '#008000'),
('Cancelled', '<i class="fas fa-times-circle"></i>', '#FF0000');

-- Insert data vào bảng orders
INSERT INTO orders (user_id, status_id, delivery_fee, items_price, total_cost, total_selling, address, phone_number, full_name) VALUES 
(2, 1, 5.0, 20.0, 15.0, 25.0,'393 to 12 ap tan hau xa tan thuan tay', '0123165435','Nguyen Van A'),
(2, 2, 4.0, 40.0, 30.0, 50.0,'1 Vo Van Ngan, Thu Duc, TPHCM', '09123435','Nguyen Van B');

-- Insert data vào bảng order_items
INSERT INTO order_items (order_id, product_id, quantity, price, message_for_cake) VALUES 
(1, 1, 2, 1.5, 'No Ice'),
(1, 2, 1, 2.0, 'Spicy'),
(2, 3, 1, 15.0, 'Birthday Cake');

-- Insert data vào bảng order_status_updates
INSERT INTO order_status_updates (order_id, status_id, updated_at) VALUES 
(1, 1, '2024-12-06 10:00:00'),
(2, 2, '2024-12-06 12:00:00');

-- Insert data vào bảng cart
INSERT INTO cart (user_id, product_id, quantity) VALUES 
(2, 1, 3),
(2, 2, 2);

-- Insert data vào bảng store_info
INSERT INTO store_info (store_name, address, phone_number, email, opening_hours, description, logo_href) VALUES 
('FoodStore', '123 Food Street', '123-456-7890', 'contact@foodstore.com', '9:00 AM - 9:00 PM', 'Your go-to place for delicious food!', 'images/logo.png');
