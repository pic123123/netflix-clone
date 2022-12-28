### 초기세팅

npx create-react-app nomflix-clone --template typescript

npm i recoil styled-components @types/styled-components react-router-dom@5.3 framer-motion react-query react-hook-form -S

- tsconfig.json
  "baseUrl": "src",
  "paths": {
  "@style/_": ["style/_"],
  }
  경로별칭 사용
