# Welcome to Super Backend!
#### This will be our backend app to fulfill our frontend and mobile app needs!
----------
## Features
- CRUD notes (/notes) (☀️ irfan)
  ```javascript
  // Data structure
  const note = {
    note: "Read book",
    date: "2020-10-16"
  }
  ```
- CRUD transactions (/transactions) (☀️ daniel)
  ```javascript
  // Data structure
  const transaction = {
    fromPhone: "+6281214129",
    toPhone: "+6281214129",
    nominal: "2000",
    date: "2020-10-16"
  }
  ```
- CRUD contacts (/contacts) (☀️ fitrah)
  ```javascript
  // Data structure
  const note = {
    contactName: "Mark Styler",
    phone: "+6281214129"
  }
  ```
- Read promo (/promo) (☀️ agus rifai)
- CRUD promo with admin route (/admin/promo) (☀️ irwan)
  ```javascript
  // Data structure
  const promo = {
    promoName: "Buy 2 get 1",
    promoStartDate: "2020-10-13",
    endStartDate: "2020-10-16"
  }
  ```
- Read weather info (/weather) (☀️ jul)
- CRUD weather info with admin route (/admin/weather) (☀️ vien)
  ```javascript
  // Data structure
  const weather = {
    temperature: "34",
    date: "2020-10-16"
  }
  ```
- Read news (/news) (☀️ natan)
- CRUD news with admin route (/admin/news) (☀️ fadly)
  ```javascript
  // Data structure
  const news = {
    header: "Teams",
    date: "2020-10-16"
  }
  ```
- Add & update credits (/credits) (☀️ agus)
- Update credits with admin route (/admin/credits) (☀️ sudi)
  ```javascript
  // Data structure
  const creditLog = {
    debt: "2000",
    credit: "0",
    currentCredit: "2000",
    date: "2020-10-16"
  }
  ```
- Read location infos (/location) (☀️ lingga)
- CRUD location infos with admin route (/admin/locations) (☀️ septian)
  ```javascript
  // Data structure
  const locationInfo = {
    name: "California",
    km2: "423,970"
  }
  ```

## How to run the project
You need to initiate the project first by typing in the terminal
```bash
npm install
```
Then you can run this project by:
- Using node
  ```bash
  node server.js
  ```
- Using nodemon
  ```bash
  nodemon --ignore db.json server.js
  ```

## Rules
1. If you want to add a library, tell the lead first!
2. You can work together to build a function with your friend to help you build your feature
3. Push to your own branch, and create your own branch by format
   ```
    YOUR_NICKNAME:YOUR_FEATURE
   ```
4. Be consistent! Always compare your solution to others if their code is
   - Shorter than yours
   - Much simpler to read than yours
   - Prone to bug than yours

## If you're done creating your feature
1. Create a Pull Request to master branch, consult to this: [How to create a PR (Pull Request)](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
2. Write what you do as message in PR

## Bug hunt! 
1. You can REPORT your friend by telling which line of code that will prone to bugs in our Telegram group
2. Remember! Our enemy is bugs! If their solution is different but it gets the job done without bug, DON'T EVER COMMENT IT
3. Every successful REPORT will count in leaderboard (in this readme)

## Leaderboard
1. Nanda (1 points)