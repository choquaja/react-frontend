import { compose } from 'redux';

const FILENAME_REGEX = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/(.*)$/;

export const sortDirFirst = (a, b) => {
  if (a.isDirectory !== b.isDirectory) {
    return a.isDirectory ? -1 : 1;
  }
  return a.parts[a.parts.length - 1] > b.parts[b.parts.length - 1] ? 1 : -1;
};

export const createDirectory = (parts, firstFile) => ({
  parts,
  name: parts[parts.length - 1],
  path: parts.join('/'),
  isDirectory: true,
  files: [firstFile],
});

export const groupByDirectory = depth => (map, file) => {
  // TODO: handle empty directories
  // Below will treat empty dirs like a file
  if (file.parts.length === (depth + 1)) {
    return map.set(file.path, file);
  }
  if (map.has(file.parts[depth])) {
    const directory = map.get(file.parts[depth]);
    directory.files = [...directory.files, file];
    return map.set(file.parts[depth], directory);
  }
  const parts = file.parts.slice(0, depth + 1);
  return map.set(file.parts[depth], createDirectory(parts, file));
};

export const recurseIfDir = depth => (file) => {
  if (!file.isDirectory) return file;
  return {
    ...file,
    files: reduceToFileTree(depth + 1)(file.files), // eslint-disable-line
  };
};

export const reduceToFileTree = depth => files => [
  ...files.reduce(groupByDirectory(depth), new Map()).values(),
].sort(sortDirFirst).map(recurseIfDir(depth));
export const startReducing = reduceToFileTree(0);
export const addName = file => ({ ...file, name: file.parts[file.parts.length - 1] });
export const addPathParts = file => ({ ...file, parts: file.path.split('/') });
export const createPath = file => ({
  ...file,
  path: (file.file.match(FILENAME_REGEX) || [])[1],
});
export const prepareFiles = files => files.map(createPath).map(addPathParts).map(addName);
export const getFileTree = compose(startReducing, prepareFiles);
