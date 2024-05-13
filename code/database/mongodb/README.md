# Todo - Source code - Database

## MongoDB

### Setup

#### Install packages

```bash
npm install
```

#### Create environment variables

Create `.env` file with following content of `.env.example`

#### Execute scripts

```bash
# Init database
npm run exec:init
```

#### Playground

Create playground scripts in `playground` folder. (e.g. `playground/my-script.js`)
Execute playground scripts by running

```bash
dotenvx run -- node playground/my-script.js
```
