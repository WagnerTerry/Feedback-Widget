# NLW Return / NLW #8 - Feedback Widget

FrontEnd - npm run dev
Backend - npm run dev
## Dependências

--------------- FrontEnd
- npm install -D tailwindcss
- npx tailwindcss init -p
- configurar o tailwindcss
- npm install phosphor-react
- npm install @headlessui/react
- npm install -D @tailwindcss/forms
- npm install --save-dev tailwind-scrollbar
- npm install html2canvas
- npm install axios

------------- Backend
- npm init -y
- npm i typescript @types/node ts-node-dev -D
- npx tsc --init 
    dentro de tsconfig: {
        target: es2020,
        "rootDir": "./src",
        "outDir": "./dist",
         "include": ["src"]
    }
- npx tsc  
    dentro de package-json {
         "scripts": {
            "test": "jest",
            "build": "tsc",
            "start": "node dist/server.js",
            "dev": "ts-node-dev src/server.ts"
  },
    }
- npm i express
- npm i --save-dev @types/express
- npm install nodemailer
- npm i --save-dev @types/nodemailer
    { se inscrever no site mailtrap, para prosseguir com o envio de email}

- npm install jest -D
- npx jest --init
- npm install ts-node -D
- npm i -D jest @swc/jest // compilar typescript no jest
    modificar no arquivo jest.config {
        // A map from regular expressions to paths to transformers
        transform: {
            "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
    }
- npm i @types/jest -D
- npm i cors
- npm i @types/cors -D

-------------------- banco de dados - //SQLite e Prisma-ORM
- npm i prisma -D
- npm i @prisma/client
- npx prisma init
    -- criar uma tabela {
        npx prisma migrate dev
            name new migration: create feedbacks
    }
- npx prisma studio // visualizar o banco - prisma studio localhost:5555

## Figma
https://www.figma.com/community/file/1102912516166573468