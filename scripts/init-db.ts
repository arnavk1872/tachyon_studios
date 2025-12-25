/**
 * Database Initialization Script
 * 
 * Run this script to create the tachyon_queries table:
 * npx tsx scripts/init-db.ts
 * 
 * Or use ts-node:
 * npx ts-node scripts/init-db.ts
 */

import { initDatabase } from '../lib/db'

async function main() {
  try {
    console.log('Initializing database...')
    await initDatabase()
    console.log('Database initialized successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Failed to initialize database:', error)
    process.exit(1)
  }
}

main()

