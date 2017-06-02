import { schema } from 'normalizr';

export const projectSchema = new schema.Entity('projects');
export const fileSchema = new schema.Entity('files');
export const resourceSchema = new schema.Entity('resources');
export const collaboratorSchema = new schema.Entity('collaborators');
