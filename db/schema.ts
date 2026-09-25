import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const inquiries=sqliteTable('inquiries',{id:text('id').primaryKey(),name:text('name').notNull(),email:text('email').notNull(),phone:text('phone').notNull(),kind:text('kind').notNull(),details:text('details').notNull(),referenceKey:text('reference_key'),createdAt:text('created_at').notNull()});
export const subscribers=sqliteTable('subscribers',{email:text('email').primaryKey(),createdAt:text('created_at').notNull()});
