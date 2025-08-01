import { defineConfig, drivers } from '@adonisjs/core/hash'

export default defineConfig({
  default: 'scrypt',

  list: {
    scrypt: drivers.scrypt({
      cost: 16384,
      blockSize: 8,
      parallelization: 1,
      saltSize: 16,
      maxMemory: 33554432,
      keyLength: 64,
    }),

    bcrypt: drivers.bcrypt({
      rounds: 10,
      saltSize: 16,
      version: 98,
    }),

    argon: drivers.argon2({
      version: 0x13,
      variant: 'id',
      iterations: 3,
      memory: 65536,
      parallelism: 4,
      saltSize: 16,
      hashLength: 32,
    }),
  },
})
