import gql from 'graphql-tag';
export type Maybe<T> = T | null | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	Upload: any;
	DateTime: any;
	Date: any;
	Time: any;
};

export type DummySubscriptionPayload = {
	__typename?: 'DummySubscriptionPayload';
	dummy?: Maybe<Scalars['String']>;
};

export type File = {
	__typename?: 'File';
	filename: Scalars['String'];
	mimetype: Scalars['String'];
	encoding: Scalars['String'];
};

export enum Gender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}

export type Mutation = {
	__typename?: 'Mutation';
	logout: Scalars['Boolean'];
	singleUpload: File;
	multipleUpload: Array<File>;
	/** @deprecated Field no longer supported */
	_dummy?: Maybe<Scalars['String']>;
};

export type MutationSingleUploadArgs = {
	file: Scalars['Upload'];
};

export type MutationMultipleUploadArgs = {
	files: Array<Scalars['Upload']>;
};

export type Node = {
	id: Scalars['ID'];
};

export type PageInfo = {
	__typename?: 'PageInfo';
	endCursor?: Maybe<Scalars['String']>;
	hasNextPage: Scalars['Boolean'];
	hasPreviousPage: Scalars['Boolean'];
	startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
	__typename?: 'Query';
	node?: Maybe<Node>;
	/** @deprecated Field no longer supported */
	_dummy?: Maybe<Scalars['String']>;
	users: UserConnection;
};

export type QueryNodeArgs = {
	id: Scalars['ID'];
};

export type QueryUsersArgs = {
	first?: Maybe<Scalars['Int']>;
	before?: Maybe<Scalars['String']>;
	after?: Maybe<Scalars['String']>;
	sortBy?: Maybe<UserSort>;
};

export enum SortDirection {
	ASC = 'ASC',
	DESC = 'DESC',
}

export type Subscription = {
	__typename?: 'Subscription';
	/** @deprecated Field no longer supported */
	_dummy?: Maybe<DummySubscriptionPayload>;
};

export type User = Node & {
	__typename?: 'User';
	id: Scalars['ID'];
	type: UserType;
};

export type UserConnection = {
	__typename?: 'UserConnection';
	edges: Array<Maybe<UserEdge>>;
	nodes: Array<Maybe<User>>;
	pageInfo: PageInfo;
	totalCount: Scalars['Int'];
};

export type UserEdge = {
	__typename?: 'UserEdge';
	cursor: Scalars['String'];
	node?: Maybe<User>;
};

export type UserSort = {
	field: UserSortField;
	direction: SortDirection;
};

export enum UserSortField {
	CREATED_AT = 'CREATED_AT',
	UPDATED_AT = 'UPDATED_AT',
}

export enum UserType {
	EMPLOYEE = 'EMPLOYEE',
}
