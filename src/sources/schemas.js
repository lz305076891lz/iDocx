import { schema } from 'normalizr'

export const template = schema.Entity('templates')
export const templates = [ template ]

export const fish = schema.Entity('fishes')

export const user = schema.Entity('users')