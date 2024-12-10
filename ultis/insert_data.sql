-- Insert data vào bảng roles
INSERT INTO roles (role_name) VALUES 
('Admin'), 
('Customer');

-- Insert data vào bảng accounts
INSERT INTO accounts (role_id, username, hashed_password) VALUES 
(1, 'admin', 'hashed_adminpassword'), 
(2, 'customer1', 'hashed_customerpassword');

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
INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url) VALUES
('Avocado', 1, 100, 'Fresh avocado, perfect for smoothies and salads', 75, 65, '/public/images/products/bo.png'),
('Pomegranate', 1, 50, 'Juicy pomegranate, rich in antioxidants', 70, 60, '/public/images/products/luu.png'),
('Australian orange', 1, 120, 'Sweet Australian oranges, perfect for juice', 50, 45, '/public/images/products/camUc.png'),
('Strawberry', 1, 200, 'Fresh strawberries, sweet and tangy', 60, 50, '/public/images/products/dautay.png'),
('Water Melon', 1, 60, 'Large and juicy watermelons', 110, 100, '/public/images/products/duahaudo.png'),
('Persimmon', 1, 80, 'Sweet and ripe persimmons', 65, 55, '/public/images/products/hong.png'),
('Star Fruit', 1, 90, 'Unique star-shaped fruit with a tangy flavor', 45, 40, '/public/images/products/khe.png'),
('Kiwi', 1, 70, 'Fresh and tangy kiwis', 35, 30, '/public/images/products/kiwi.png'),
('Pear', 1, 100, 'Crisp and juicy pears', 40, 35, '/public/images/products/le.png'),
('Pomelo', 1, 40, 'Large pomelos, mildly sweet and tangy', 70, 60, '/public/images/products/buoi.png'),
('Passion Fruit', 1, 75, 'Exotic passion fruits, rich in flavor', 55, 50, '/public/images/products/chanhday.png'),
('Longan', 1, 150, 'Sweet and juicy longans', 45, 40, '/public/images/products/nhan.png'),
('Grape', 1, 200, 'Fresh and sweet grapes', 75, 65, '/public/images/products/nho.png'),
('Mangosteen', 1, 60, 'Exotic mangosteen with sweet and tangy flavor', 120, 110, '/public/images/products/mangcut.png'),
('Soursop', 1, 30, 'Unique soursop with a tropical flavor', 100, 90, '/public/images/products/mangcau.png'),
('Lychee', 1, 120, 'Sweet and juicy lychees', 65, 55, '/public/images/products/vaithieu.png'),
('Pink Guava', 1, 80, 'Fresh pink guava, rich in vitamin C', 50, 45, '/public/images/products/oihong.png'),
('DaLat Grape', 1, 90, 'Special grapes from DaLat', 85, 75, '/public/images/products/nhoDalat.png'),
('Red Apple', 1, 100, 'Crisp and sweet red apples', 55, 50, '/public/images/products/taodo.png'),
('Durian', 1, 20, 'The king of fruits, rich and creamy', 150, 135, '/public/images/products/sauriengvang.png');

INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url) VALUES
('Corn', 2, 150, 'Fresh and sweet corn, ideal for grilling or soups', 20, 18, '/public/images/products/bap.png'),
('Cabbage', 2, 120, 'Green cabbage, crisp and fresh', 15, 12, '/public/images/products/bapcai.png'),
('Napa Cabbage', 2, 100, 'Fresh napa cabbage, perfect for hot pot and stir-fry', 25, 20, '/public/images/products/caithao.png'),
('Winter melon', 2, 80, 'Large winter melon, perfect for soups', 30, 25, '/public/images/products/bidao.png'),
('Fish mint', 2, 200, 'Fresh fish mint, ideal for salads', 10, 8, '/public/images/products/diepca.png'),
('Bok choy', 2, 100, 'Crisp bok choy, ideal for stir-fry or steaming', 18, 15, '/public/images/products/caithia.png'),
('Spinach', 2, 120, 'Fresh spinach, rich in iron and nutrients', 20, 18, '/public/images/products/caixanh.png'),
('Tomato', 2, 200, 'Juicy tomatoes, perfect for salads and sauces', 15, 12, '/public/images/products/cachua.png'),
('Bitter melon', 2, 90, 'Fresh bitter melon, great for stir-fry or soup', 18, 15, '/public/images/products/khoqua.png'),
('Cucumber', 2, 150, 'Crisp cucumbers, great for salads and snacks', 12, 10, '/public/images/products/dualeo.png'),
('Mushroom', 2, 70, 'Fresh mushrooms, perfect for soups or stir-fry', 35, 30, '/public/images/products/namtuoi.png'),
('Bell pepper', 2, 100, 'Crisp and sweet bell peppers in various colors', 25, 20, '/public/images/products/otchuong.png'),
('Broccoli', 2, 80, 'Fresh broccoli, rich in vitamins', 40, 35, '/public/images/products/su.png'),
('Pineapple', 2, 60, 'Fresh pineapple, perfect for desserts or smoothies', 25, 22, '/public/images/products/thom.png'),
('Lettuce', 2, 150, 'Crisp lettuce, perfect for salads', 15, 12, '/public/images/products/xalach.png');

INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url) VALUES
('Carrot', 3, 120, 'Fresh and crunchy carrots, rich in beta-carotene', 20, 18, '/public/images/products/carot.png'),
('Purple Radish', 3, 100, 'Fresh purple radish, perfect for pickling or salads', 25, 22, '/public/images/products/cucaitim.png'),
('Ginger', 3, 80, 'Fresh ginger root, great for cooking or tea', 30, 28, '/public/images/products/cugung.png'),
('Turmeric', 3, 70, 'Fresh turmeric root, rich in antioxidants', 35, 32, '/public/images/products/cunghe.png'),
('Sweet Potato', 3, 150, 'Sweet and starchy sweet potatoes, perfect for roasting or boiling', 18, 15, '/public/images/products/khoailang.png');

INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url) VALUES
('Choux', 4, 80, 'Light and airy choux pastries filled with cream', 35, 30, '/public/images/products/choux.png'),
('Cupcake', 4, 100, 'Delicious cupcakes with frosting, perfect for any occasion', 25, 22, '/public/images/products/cupcake.png'),
('Birthday Cake', 4, 50, 'Special birthday cakes with customizable designs', 200, 180, '/public/images/products/banhkem.png'),
('Waffle', 4, 120, 'Crispy waffles, perfect with syrup or fresh fruits', 30, 25, '/public/images/products/waffle.png'),
('Donut', 4, 150, 'Sweet and soft donuts with various toppings', 20, 18, '/public/images/products/donut.png'),
('Brownies', 4, 90, 'Rich and fudgy brownies, ideal for chocolate lovers', 40, 35, '/public/images/products/brownies.png'),
('Muffin', 4, 100, 'Soft and moist muffins with various flavors', 25, 20, '/public/images/products/muffin.png'),
('Cookies', 4, 200, 'Crunchy and delicious cookies in assorted flavors', 15, 12, '/public/images/products/cookies.png');

INSERT INTO products (name, category_id, quantity, description, cost_price, selling_price, image_url) VALUES
('Croissant', 5, 100, 'Flaky and buttery croissants, perfect for breakfast', 25, 20, '/public/images/products/croissant.png'),
('Salted Egg Sponge Cake', 5, 80, 'Soft sponge cake with a rich salted egg yolk flavor', 35, 30, '/public/images/products/salted.png');

-- Insert data vào bảng status
INSERT INTO status (status_name) VALUES 
('Pending'), 
('Processing'), 
('Completed'),
('Cancelled'),
('Returned');

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
