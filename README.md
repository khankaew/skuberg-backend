# skuberg-backend

พัฒนาโดยใช้ Express.js, Prisma ORM และฐานข้อมูล MySQL

ขั้นตอนการติดตั้งและรันโปรเจกต์
ใช้  node.js version 22, 

1. run database (username: root, password: password)
```
$ docker-compose up -d
```

2. ติดตั้ง dependencies
```
$ npm install
```

3. สร้างฐานข้อมูลและ migration
```
$ npx prisma migrate dev --name init
```

4. seed data
```
$ npm run seed
```

5. รันโปรเจกต์
```
$ npm run dev
```

6. เข้าใช้งานที่ api ที่ http://localhost:3000 , database ที่ http://localhost:8090/
