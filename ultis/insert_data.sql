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
('Beverages'), 
('Snacks'), 
('Bakery');

-- Insert data vào bảng products
INSERT INTO products (name, category_id, quantity, description, cost_price, sale_price, image_url) VALUES 
('Coke', 1, 100, 'Carbonated Soft Drink', 0.5, 1.5, 'images/coke.jpg'),
('Chips', 2, 50, 'Potato Chips', 0.3, 2.0, 'images/chips.jpg'),
('Cake', 3, 20, 'Chocolate Cake', 5.0, 15.0, 'images/cake.jpg');

-- Insert data vào bảng status
INSERT INTO status (status_name) VALUES 
('Pending'), 
('Processing'), 
('Completed');

-- Insert data vào bảng orders
INSERT INTO orders (user_id, status_id, delivery_fee, items_price, total_cost, total_sale) VALUES 
(2, 1, 5.0, 20.0, 15.0, 25.0),
(2, 2, 4.0, 40.0, 30.0, 50.0);

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
