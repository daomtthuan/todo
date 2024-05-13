if (!process.env.CONNECTION_STRING) {
  throw new Error(`Missing 'CONNECTION_STRING' in environment variables`);
}

if (!process.env.DATABASE) {
  throw new Error(`Missing 'DATABASE' in environment variables`);
}

export const { CONNECTION_STRING, DATABASE } = process.env;
