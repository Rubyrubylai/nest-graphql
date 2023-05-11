export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  Date: any;
};

export type Author = {
  __typename?: 'Author';
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type CommentInput = {
  content: Scalars['String'];
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: Comment;
  upvotePost: Scalars['Int'];
  upvotePostArg: Scalars['Int'];
};


export type MutationAddCommentArgs = {
  comment: CommentInput;
  postId: Scalars['Int'];
};


export type MutationUpvotePostArgs = {
  upvotePostData: UpvotePostInput;
};


export type MutationUpvotePostArgArgs = {
  postId: Scalars['Int'];
};

/** post */
export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  votes?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  authors: Author;
  date: Scalars['Date'];
};


export type QueryAuthorArgs = {
  id: Scalars['Int'];
};


export type QueryAuthorsArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  commentAdded: Comment;
};

export type UpvotePostInput = {
  postId: Scalars['Float'];
};
