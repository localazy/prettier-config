import { createJiti } from 'jiti';

const jiti = createJiti(import.meta.url);
const localazy = await jiti.import('./src/main.ts', { default: true });

export default localazy;
