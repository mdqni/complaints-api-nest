# Complaints API (NestJS + gRPC + RabbitMQ)

Микросервис для работы с жалобами студентов.  
Проект построен на **NestJS**, использует **gRPC** для коммуникации между сервисами и **RabbitMQ** для асинхронных событий.  
Кэширование реализовано через **Redis**, база данных — **PostgreSQL (Prisma ORM)**.  

---

## 🚀 Стек технологий
- **NestJS** — основной фреймворк  
- **gRPC** — коммуникация между сервисами  
- **RabbitMQ** — брокер сообщений для событий  
- **PostgreSQL** + **Prisma ORM** — база данных  
- **Redis** — кэширование  
- **Docker Compose** — инфраструктура (DB, Redis, RabbitMQ)  

---

## 📂 Архитектура проекта
```
complaints-api-nest/
│── apps/
│   ├── complaints-service/    # сервис для работы с жалобами
│   └── categories-service/    # сервис категорий жалоб
│
│── libs/
│   ├── proto/                 # gRPC .proto файлы
│   ├── rabbitmq/              # модуль RabbitMQ
│   └── redis/                 # модуль Redis
│   └── prisma/                 # модуль Prisma
│
│── docker-compose.yml         # инфраструктура (Postgres, Redis, RabbitMQ)
│── README.md
```

---

## ⚙️ Установка и запуск

### 1. Клонируй репозиторий
```bash
git clone git@github.com:mdqni/complaints-api-nest.git
cd complaints-api-nest
```

### 2. Подними инфраструктуру
```bash
docker compose up -d
```
Поднимутся:
- PostgreSQL (порт `5432`)  
- Redis (порт `6379`)  
- RabbitMQ + панель управления (порт `15672`)  

👉 Панель RabbitMQ: [http://localhost:15672](http://localhost:15672) (логин: `guest`, пароль: `guest`)

### 3. Установи зависимости
```bash
npm install
```

### 4. Прогони миграции
```bash
npx prisma migrate dev
```

### 5. Запусти сервисы
#### Жалобы
```bash
npm run start:dev complaints-service
```
#### Категории
```bash
npm run start:dev categories-service
```

#### Запуск одновременно
```bash
npm run start:all
```

---

## 📄 Лицензия
MIT
