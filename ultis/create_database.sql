CREATE DATABASE FoodStore;

USE FoodStore;

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name NVARCHAR(20)
);

CREATE TABLE accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT NOT NULL,
    username NVARCHAR(50) NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    full_name NVARCHAR(50) NOT NULL,
    email NVARCHAR(50),
    birthday DATE,
    address TEXT NOT NULL, 
    phone_number NVARCHAR(50),
    gender NVARCHAR(10),
    account_id INT,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name NVARCHAR(50)
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name NVARCHAR(50) NOT NULL,
    category_id INT,
    quantity INT DEFAULT 0,
    description TEXT,
    cost_price DECIMAL(10, 2) NOT NULL DEFAULT 0, -- Giá vốn
    selling_price DECIMAL(10, 2) NOT NULL,          -- Giá bán
    old_price DECIMAL(10, 2) DEFAULT 0,          -- Giá cũ
    discount_percents DECIMAL(10, 2) DEFAULT 0, -- tỉ lệ giảm giá 
    origin VARCHAR(255),
    image_url VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE status (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(20),
    icon VARCHAR(255),
    color VARCHAR(20)
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    status_id INT,
    delivery_fee DECIMAL(10, 2),
    items_price DECIMAL(10, 2),
    total_cost DECIMAL(10, 2) DEFAULT 0,       -- Tổng giá vốn
    total_selling DECIMAL(10, 2),                 -- Tổng giá bán
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    address VARCHAR(255) NOT NULL,
    phone_number NVARCHAR(50) NOT NULL,
    full_name NVARCHAR(255),
    note TEXT,

    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (status_id) REFERENCES status(status_id)
);

CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    message_for_cake TEXT,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE order_status_updates (
    update_id INT AUTO_INCREMENT PRIMARY KEY, -- ID duy nhất cho mỗi lần cập nhật
    order_id INT NOT NULL,                    -- Mã đơn hàng (liên kết với bảng orders)
    status_id INT NOT NULL,                   -- Trạng thái mới
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Thời gian cập nhật
    title VARCHAR(255) NOT NULL,
    reason VARCHAR(255) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (status_id) REFERENCES status(status_id)
);

CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    is_checked INT DEFAULT 0,
    added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE store_info (
    store_id INT AUTO_INCREMENT PRIMARY KEY,  -- ID duy nhất (dùng khi mở rộng)
    store_name NVARCHAR(100) NOT NULL,        -- Tên cửa hàng
    address text NOT NULL,           -- Địa chỉ
    phone_number NVARCHAR(20),                -- Số điện thoại liên hệ
    email NVARCHAR(50),                       -- Email liên hệ
    opening_hours NVARCHAR(100),              -- Giờ mở cửa
    description text,                -- Mô tả thêm về cửa hàng
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Ngày tạo
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Ngày cập nhật
    logo_href TEXT                            -- URL logo cửa hàng
);
