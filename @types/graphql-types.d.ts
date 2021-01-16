export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___slug'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___image___sourceInstanceName'
  | 'childrenMdx___frontmatter___image___absolutePath'
  | 'childrenMdx___frontmatter___image___relativePath'
  | 'childrenMdx___frontmatter___image___extension'
  | 'childrenMdx___frontmatter___image___size'
  | 'childrenMdx___frontmatter___image___prettySize'
  | 'childrenMdx___frontmatter___image___modifiedTime'
  | 'childrenMdx___frontmatter___image___accessTime'
  | 'childrenMdx___frontmatter___image___changeTime'
  | 'childrenMdx___frontmatter___image___birthTime'
  | 'childrenMdx___frontmatter___image___root'
  | 'childrenMdx___frontmatter___image___dir'
  | 'childrenMdx___frontmatter___image___base'
  | 'childrenMdx___frontmatter___image___ext'
  | 'childrenMdx___frontmatter___image___name'
  | 'childrenMdx___frontmatter___image___relativeDirectory'
  | 'childrenMdx___frontmatter___image___dev'
  | 'childrenMdx___frontmatter___image___mode'
  | 'childrenMdx___frontmatter___image___nlink'
  | 'childrenMdx___frontmatter___image___uid'
  | 'childrenMdx___frontmatter___image___gid'
  | 'childrenMdx___frontmatter___image___rdev'
  | 'childrenMdx___frontmatter___image___ino'
  | 'childrenMdx___frontmatter___image___atimeMs'
  | 'childrenMdx___frontmatter___image___mtimeMs'
  | 'childrenMdx___frontmatter___image___ctimeMs'
  | 'childrenMdx___frontmatter___image___atime'
  | 'childrenMdx___frontmatter___image___mtime'
  | 'childrenMdx___frontmatter___image___ctime'
  | 'childrenMdx___frontmatter___image___birthtime'
  | 'childrenMdx___frontmatter___image___birthtimeMs'
  | 'childrenMdx___frontmatter___image___blksize'
  | 'childrenMdx___frontmatter___image___blocks'
  | 'childrenMdx___frontmatter___image___publicURL'
  | 'childrenMdx___frontmatter___image___childrenImageSharp'
  | 'childrenMdx___frontmatter___image___childrenMdx'
  | 'childrenMdx___frontmatter___image___id'
  | 'childrenMdx___frontmatter___image___children'
  | 'childrenMdx___frontmatter___keywords'
  | 'childrenMdx___frontmatter___categories'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___language'
  | 'childrenMdx___frontmatter___description'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___slug'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___image___sourceInstanceName'
  | 'childMdx___frontmatter___image___absolutePath'
  | 'childMdx___frontmatter___image___relativePath'
  | 'childMdx___frontmatter___image___extension'
  | 'childMdx___frontmatter___image___size'
  | 'childMdx___frontmatter___image___prettySize'
  | 'childMdx___frontmatter___image___modifiedTime'
  | 'childMdx___frontmatter___image___accessTime'
  | 'childMdx___frontmatter___image___changeTime'
  | 'childMdx___frontmatter___image___birthTime'
  | 'childMdx___frontmatter___image___root'
  | 'childMdx___frontmatter___image___dir'
  | 'childMdx___frontmatter___image___base'
  | 'childMdx___frontmatter___image___ext'
  | 'childMdx___frontmatter___image___name'
  | 'childMdx___frontmatter___image___relativeDirectory'
  | 'childMdx___frontmatter___image___dev'
  | 'childMdx___frontmatter___image___mode'
  | 'childMdx___frontmatter___image___nlink'
  | 'childMdx___frontmatter___image___uid'
  | 'childMdx___frontmatter___image___gid'
  | 'childMdx___frontmatter___image___rdev'
  | 'childMdx___frontmatter___image___ino'
  | 'childMdx___frontmatter___image___atimeMs'
  | 'childMdx___frontmatter___image___mtimeMs'
  | 'childMdx___frontmatter___image___ctimeMs'
  | 'childMdx___frontmatter___image___atime'
  | 'childMdx___frontmatter___image___mtime'
  | 'childMdx___frontmatter___image___ctime'
  | 'childMdx___frontmatter___image___birthtime'
  | 'childMdx___frontmatter___image___birthtimeMs'
  | 'childMdx___frontmatter___image___blksize'
  | 'childMdx___frontmatter___image___blocks'
  | 'childMdx___frontmatter___image___publicURL'
  | 'childMdx___frontmatter___image___childrenImageSharp'
  | 'childMdx___frontmatter___image___childrenMdx'
  | 'childMdx___frontmatter___image___id'
  | 'childMdx___frontmatter___image___children'
  | 'childMdx___frontmatter___keywords'
  | 'childMdx___frontmatter___categories'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___language'
  | 'childMdx___frontmatter___description'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type HeadingsMdx = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageLayout = 
  | 'FIXED'
  | 'FLUID'
  | 'CONSTRAINED';

export type ImagePlaceholder = 
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum = 
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___slug'
  | 'frontmatter___date'
  | 'frontmatter___image___sourceInstanceName'
  | 'frontmatter___image___absolutePath'
  | 'frontmatter___image___relativePath'
  | 'frontmatter___image___extension'
  | 'frontmatter___image___size'
  | 'frontmatter___image___prettySize'
  | 'frontmatter___image___modifiedTime'
  | 'frontmatter___image___accessTime'
  | 'frontmatter___image___changeTime'
  | 'frontmatter___image___birthTime'
  | 'frontmatter___image___root'
  | 'frontmatter___image___dir'
  | 'frontmatter___image___base'
  | 'frontmatter___image___ext'
  | 'frontmatter___image___name'
  | 'frontmatter___image___relativeDirectory'
  | 'frontmatter___image___dev'
  | 'frontmatter___image___mode'
  | 'frontmatter___image___nlink'
  | 'frontmatter___image___uid'
  | 'frontmatter___image___gid'
  | 'frontmatter___image___rdev'
  | 'frontmatter___image___ino'
  | 'frontmatter___image___atimeMs'
  | 'frontmatter___image___mtimeMs'
  | 'frontmatter___image___ctimeMs'
  | 'frontmatter___image___atime'
  | 'frontmatter___image___mtime'
  | 'frontmatter___image___ctime'
  | 'frontmatter___image___birthtime'
  | 'frontmatter___image___birthtimeMs'
  | 'frontmatter___image___blksize'
  | 'frontmatter___image___blocks'
  | 'frontmatter___image___publicURL'
  | 'frontmatter___image___childrenImageSharp'
  | 'frontmatter___image___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___image___childrenImageSharp___id'
  | 'frontmatter___image___childrenImageSharp___children'
  | 'frontmatter___image___childImageSharp___gatsbyImageData'
  | 'frontmatter___image___childImageSharp___id'
  | 'frontmatter___image___childImageSharp___children'
  | 'frontmatter___image___childrenMdx'
  | 'frontmatter___image___childrenMdx___rawBody'
  | 'frontmatter___image___childrenMdx___fileAbsolutePath'
  | 'frontmatter___image___childrenMdx___slug'
  | 'frontmatter___image___childrenMdx___body'
  | 'frontmatter___image___childrenMdx___excerpt'
  | 'frontmatter___image___childrenMdx___headings'
  | 'frontmatter___image___childrenMdx___html'
  | 'frontmatter___image___childrenMdx___mdxAST'
  | 'frontmatter___image___childrenMdx___tableOfContents'
  | 'frontmatter___image___childrenMdx___timeToRead'
  | 'frontmatter___image___childrenMdx___id'
  | 'frontmatter___image___childrenMdx___children'
  | 'frontmatter___image___childMdx___rawBody'
  | 'frontmatter___image___childMdx___fileAbsolutePath'
  | 'frontmatter___image___childMdx___slug'
  | 'frontmatter___image___childMdx___body'
  | 'frontmatter___image___childMdx___excerpt'
  | 'frontmatter___image___childMdx___headings'
  | 'frontmatter___image___childMdx___html'
  | 'frontmatter___image___childMdx___mdxAST'
  | 'frontmatter___image___childMdx___tableOfContents'
  | 'frontmatter___image___childMdx___timeToRead'
  | 'frontmatter___image___childMdx___id'
  | 'frontmatter___image___childMdx___children'
  | 'frontmatter___image___id'
  | 'frontmatter___image___parent___id'
  | 'frontmatter___image___parent___children'
  | 'frontmatter___image___children'
  | 'frontmatter___image___children___id'
  | 'frontmatter___image___children___children'
  | 'frontmatter___image___internal___content'
  | 'frontmatter___image___internal___contentDigest'
  | 'frontmatter___image___internal___description'
  | 'frontmatter___image___internal___fieldOwners'
  | 'frontmatter___image___internal___ignoreType'
  | 'frontmatter___image___internal___mediaType'
  | 'frontmatter___image___internal___owner'
  | 'frontmatter___image___internal___type'
  | 'frontmatter___keywords'
  | 'frontmatter___categories'
  | 'frontmatter___tags'
  | 'frontmatter___language'
  | 'frontmatter___description'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  image?: Maybe<File>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___url'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___image'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
  relatedArticles?: Maybe<Array<Maybe<SitePageContextRelatedArticles>>>;
  latestArticles?: Maybe<Array<Maybe<SitePageContextLatestArticles>>>;
  previous?: Maybe<SitePageContextPrevious>;
  next?: Maybe<SitePageContextNext>;
  isCat?: Maybe<Scalars['Boolean']>;
  displayYear?: Maybe<Scalars['Date']>;
  displayMonth?: Maybe<Scalars['String']>;
  periodStartDate?: Maybe<Scalars['Date']>;
  periodEndDate?: Maybe<Scalars['Date']>;
  frontmatter?: Maybe<SitePageContextFrontmatter>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  relatedArticles?: Maybe<SitePageContextRelatedArticlesFilterListInput>;
  latestArticles?: Maybe<SitePageContextLatestArticlesFilterListInput>;
  previous?: Maybe<SitePageContextPreviousFilterInput>;
  next?: Maybe<SitePageContextNextFilterInput>;
  isCat?: Maybe<BooleanQueryOperatorInput>;
  displayYear?: Maybe<DateQueryOperatorInput>;
  displayMonth?: Maybe<StringQueryOperatorInput>;
  periodStartDate?: Maybe<DateQueryOperatorInput>;
  periodEndDate?: Maybe<DateQueryOperatorInput>;
  frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
};

export type SitePageContextFrontmatter = {
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextFrontmatterFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextLatestArticles = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};

export type SitePageContextLatestArticlesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextLatestArticlesFilterListInput = {
  elemMatch?: Maybe<SitePageContextLatestArticlesFilterInput>;
};

export type SitePageContextNext = {
  frontmatter?: Maybe<SitePageContextNextFrontmatter>;
};

export type SitePageContextNextFilterInput = {
  frontmatter?: Maybe<SitePageContextNextFrontmatterFilterInput>;
};

export type SitePageContextNextFrontmatter = {
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  year?: Maybe<Scalars['Date']>;
  month?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
};

export type SitePageContextNextFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  year?: Maybe<DateQueryOperatorInput>;
  month?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPrevious = {
  frontmatter?: Maybe<SitePageContextPreviousFrontmatter>;
};

export type SitePageContextPreviousFilterInput = {
  frontmatter?: Maybe<SitePageContextPreviousFrontmatterFilterInput>;
};

export type SitePageContextPreviousFrontmatter = {
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  year?: Maybe<Scalars['Date']>;
  month?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
};

export type SitePageContextPreviousFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  year?: Maybe<DateQueryOperatorInput>;
  month?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextRelatedArticles = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  score?: Maybe<Scalars['Int']>;
};

export type SitePageContextRelatedArticlesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  score?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextRelatedArticlesFilterListInput = {
  elemMatch?: Maybe<SitePageContextRelatedArticlesFilterInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'context___relatedArticles'
  | 'context___relatedArticles___title'
  | 'context___relatedArticles___slug'
  | 'context___relatedArticles___date'
  | 'context___relatedArticles___score'
  | 'context___latestArticles'
  | 'context___latestArticles___title'
  | 'context___latestArticles___slug'
  | 'context___latestArticles___date'
  | 'context___previous___frontmatter___title'
  | 'context___previous___frontmatter___date'
  | 'context___previous___frontmatter___year'
  | 'context___previous___frontmatter___month'
  | 'context___previous___frontmatter___tags'
  | 'context___previous___frontmatter___slug'
  | 'context___previous___frontmatter___keywords'
  | 'context___previous___frontmatter___language'
  | 'context___next___frontmatter___title'
  | 'context___next___frontmatter___date'
  | 'context___next___frontmatter___year'
  | 'context___next___frontmatter___month'
  | 'context___next___frontmatter___tags'
  | 'context___next___frontmatter___slug'
  | 'context___next___frontmatter___keywords'
  | 'context___next___frontmatter___language'
  | 'context___isCat'
  | 'context___displayYear'
  | 'context___displayMonth'
  | 'context___periodStartDate'
  | 'context___periodEndDate'
  | 'context___frontmatter___slug'
  | 'context___frontmatter___date'
  | 'context___frontmatter___title'
  | 'context___frontmatter___image'
  | 'context___frontmatter___keywords'
  | 'context___frontmatter___categories'
  | 'context___frontmatter___tags'
  | 'context___frontmatter___language'
  | 'context___frontmatter___description'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___codegenConfig___maybeValue'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___lessBabel'
  | 'pluginCreator___pluginOptions___mediaTypes'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___target'
  | 'pluginCreator___pluginOptions___rel'
  | 'pluginCreator___pluginOptions___shortname'
  | 'pluginCreator___pluginOptions___indentedSyntax'
  | 'pluginCreator___pluginOptions___indentType'
  | 'pluginCreator___pluginOptions___indentWidth'
  | 'pluginCreator___pluginOptions___linefeed'
  | 'pluginCreator___pluginOptions___omitSourceMapUrl'
  | 'pluginCreator___pluginOptions___precision'
  | 'pluginCreator___pluginOptions___sourceComments'
  | 'pluginCreator___pluginOptions___sourceMapContents'
  | 'pluginCreator___pluginOptions___sourceMapEmbed'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___displayName'
  | 'pluginOptions___minify'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___codegenConfig___maybeValue'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___extensions'
  | 'pluginOptions___lessBabel'
  | 'pluginOptions___mediaTypes'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___target'
  | 'pluginOptions___rel'
  | 'pluginOptions___shortname'
  | 'pluginOptions___indentedSyntax'
  | 'pluginOptions___indentType'
  | 'pluginOptions___indentWidth'
  | 'pluginOptions___linefeed'
  | 'pluginOptions___omitSourceMapUrl'
  | 'pluginOptions___precision'
  | 'pluginOptions___sourceComments'
  | 'pluginOptions___sourceMapContents'
  | 'pluginOptions___sourceMapEmbed'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  displayName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  codegenConfig?: Maybe<SitePluginPluginOptionsCodegenConfig>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  shortname?: Maybe<Scalars['String']>;
  indentedSyntax?: Maybe<Scalars['Boolean']>;
  indentType?: Maybe<Scalars['String']>;
  indentWidth?: Maybe<Scalars['Int']>;
  linefeed?: Maybe<Scalars['String']>;
  omitSourceMapUrl?: Maybe<Scalars['Boolean']>;
  precision?: Maybe<Scalars['Int']>;
  sourceComments?: Maybe<Scalars['Boolean']>;
  sourceMapContents?: Maybe<Scalars['Boolean']>;
  sourceMapEmbed?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsCodegenConfig = {
  maybeValue?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsCodegenConfigFilterInput = {
  maybeValue?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  displayName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  codegenConfig?: Maybe<SitePluginPluginOptionsCodegenConfigFilterInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
  shortname?: Maybe<StringQueryOperatorInput>;
  indentedSyntax?: Maybe<BooleanQueryOperatorInput>;
  indentType?: Maybe<StringQueryOperatorInput>;
  indentWidth?: Maybe<IntQueryOperatorInput>;
  linefeed?: Maybe<StringQueryOperatorInput>;
  omitSourceMapUrl?: Maybe<BooleanQueryOperatorInput>;
  precision?: Maybe<IntQueryOperatorInput>;
  sourceComments?: Maybe<BooleanQueryOperatorInput>;
  sourceMapContents?: Maybe<BooleanQueryOperatorInput>;
  sourceMapEmbed?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type BlogArchiveListQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogArchiveListQuery = { allMdx: { edges: Array<{ node: { frontmatter?: Maybe<Pick<MdxFrontmatter, 'date'>> } }> } };

export type BlogTagListQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogTagListQuery = { allMdx: { group: Array<Pick<MdxGroupConnection, 'fieldValue' | 'totalCount'>> } };

export type ImageQueryVariables = Exact<{ [key: string]: never; }>;


export type ImageQuery = { images: { edges: Array<{ node: (
        Pick<File, 'relativePath' | 'name'>
        & { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }
      ) }> } };

export type BlogCardListQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogCardListQuery = { allMdx: { edges: Array<{ node: { frontmatter?: Maybe<(
          Pick<MdxFrontmatter, 'date' | 'title' | 'tags' | 'slug'>
          & { image?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_TracedSvgFragment> }> }> }
        )> } }> } };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { desktop?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> };

export type InfoAndSiteTitleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type InfoAndSiteTitleQueryQuery = { site?: Maybe<(
    Pick<Site, 'buildTime'>
    & { siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }
  )> };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'url'>> }> };

export type BlogArticleListQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogArticleListQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }>, allMdx: { edges: Array<{ node: { frontmatter?: Maybe<Pick<MdxFrontmatter, 'date' | 'title' | 'description' | 'tags' | 'slug'>> } }> } };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

export type BlogArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type BlogArticleBySlugQuery = { mdx?: Maybe<(
    Pick<Mdx, 'body' | 'tableOfContents'>
    & { frontmatter?: Maybe<(
      Pick<MdxFrontmatter, 'date' | 'slug' | 'title' | 'tags' | 'keywords' | 'description' | 'language'>
      & { image?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<(
            Pick<ImageSharpFluid, 'src'>
            & GatsbyImageSharpFluid_WithWebp_TracedSvgFragment
          )> }> }> }
    )> }
  )> };

export type BlogCatArticleListQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type BlogCatArticleListQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }>, allMdx: { edges: Array<{ node: { frontmatter?: Maybe<Pick<MdxFrontmatter, 'date' | 'title' | 'description' | 'tags' | 'slug'>> } }> } };

export type BlogDateArticleListQueryVariables = Exact<{
  periodStartDate?: Maybe<Scalars['Date']>;
  periodEndDate?: Maybe<Scalars['Date']>;
}>;


export type BlogDateArticleListQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }>, allMdx: { edges: Array<{ node: { frontmatter?: Maybe<Pick<MdxFrontmatter, 'date' | 'title' | 'description' | 'tags' | 'slug'>> } }> } };

export type BlogTagArticleListQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type BlogTagArticleListQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }>, allMdx: { edges: Array<{ node: { frontmatter?: Maybe<Pick<MdxFrontmatter, 'date' | 'title' | 'description' | 'tags' | 'slug'>> } }> } };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
