import { Pool } from 'pg'

let pool: Pool | null = null
let initPromise: Promise<void> | null = null

function getPool() {
  if (!pool) {
    const connectionString = process.env.DB_CONNECTION_STRING
    
    if (!connectionString) {
      throw new Error('DB_CONNECTION_STRING environment variable is not set')
    }

    pool = new Pool({
      connectionString,
      ssl: connectionString.includes('sslmode=require') || connectionString.includes('ssl=true') 
        ? { rejectUnauthorized: false } 
        : undefined,
    })
  }
  
  return pool
}

export async function initDatabase() {
  if (initPromise) {
    return initPromise
  }

  initPromise = (async () => {
    const client = getPool()
    
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS tachyon_queries (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          company VARCHAR(255) NOT NULL,
          use_case VARCHAR(100),
          message TEXT,
          consent BOOLEAN NOT NULL DEFAULT false,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      `)
      
      const result = await client.query(`
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'tachyon_queries'
      `)
      
      const columns = result.rows.map(row => row.column_name)
      
      if (columns.includes('data_sources')) {
        await client.query(`ALTER TABLE tachyon_queries DROP COLUMN IF EXISTS data_sources`)
      }
      if (columns.includes('deployment')) {
        await client.query(`ALTER TABLE tachyon_queries DROP COLUMN IF EXISTS deployment`)
      }
      if (columns.includes('budget')) {
        await client.query(`ALTER TABLE tachyon_queries DROP COLUMN IF EXISTS budget`)
      }
      
      console.log('Database table tachyon_queries initialized successfully')
    } catch (error) {
      console.error('Error initializing database:', error)
      initPromise = null
      throw error
    }
  })()

  return initPromise
}

export async function saveQuote(data: {
  name: string
  email: string
  company: string
  useCase?: string
  message?: string
  consent: boolean
}) {
  const client = getPool()
  
  try {
    const result = await client.query(
      `INSERT INTO tachyon_queries (
        name, email, company, use_case, message, consent
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id`,
      [
        data.name,
        data.email,
        data.company,
        data.useCase || null,
        data.message || null,
        data.consent,
      ]
    )
    
    return result.rows[0].id
  } catch (error) {
    console.error('Error saving quote to database:', error)
    throw error
  }
}

export { getPool }

