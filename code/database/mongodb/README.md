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

##### Init database

```bash
# Init database
npm run exec:init
```

##### Task

```bash
# List all tasks
npm run exec:task list

# Add new task
npm run exec:task create -- -- --name "Task 1" --description "Task 1 description" --dueDate "2022-01-01T00:00:00.000Z" --labels "label1,label2"
```

#### Playground

Create playground scripts in `playground` folder. (e.g. `playground/my-script.js`)
Execute playground scripts by running

```bash
dotenvx run -- node playground/my-script.js
```
