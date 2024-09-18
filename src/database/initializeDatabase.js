export async function initializeDatabase(database) {
try {
    await database.exceAsync(`
        DROP TABLE IF EXISTS users;

        CREATE TABLE IF NOT EXISTS users (
        id integer PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL DEFAULT 'A123456a!',
        role TEXT NOT NULL DEFAULT 'USER',
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATE,
        );

        INSERT or REPLACE INTO users (nome, email, senha, role) VALUES ('Super', 'super@email.com', 'A123456a!', 'SUPER');
        INSERT or REPLACE INTO users (nome, email, senha, role) VALUES ('admin', 'admin@email.com', 'A123456a!', 'ADMIN');
        INSERT or REPLACE INTO users (nome, email, senha, role) VALUES ('User', 'user@email.com', 'A123456a!', 'USER');
        `)
} catch (error) {
    console.log(error);
    }

}