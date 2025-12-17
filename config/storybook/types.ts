export interface IndexEntry {
  exportName: string;
  importPath: string;
  type: 'story';
  subtype?: 'story' | 'test';
  rawComponentPath?: string;
  metaId?: string;
  name?: string;
  tags?: string[];
  title?: string;
  __id?: string;
  id: string;
}

export default interface IndexJSON {
  entries: Record<string, IndexEntry>;
  v: number;
}