import { schema } from 'normalizr'

export const template = new schema.Entity('templates')
export const templates = [ template ]

export const fish = new schema.Entity('fishes')
export const fishes = [ fish ]

export const user = new schema.Entity('users')