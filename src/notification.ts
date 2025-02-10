export type NotificationType =
  | 'FOLLOW'
  | 'FEED_LIKE'
  | 'FEED_COMMENT'
  | 'FEED_REPLY'
  | 'FEED_MENTION'
  | 'POST_COMMENT'
  | 'POST_REPLY'
  | 'POST_MENTION';

export type Actor = {
  id: string;
  name: string;
  image: string | null;
};

export type FollowData = {
  type: 'FOLLOW';
  actor: Actor;
};

export type FeedLikeData = {
  type: 'FEED_LIKE';
  feedId: string;
  likeCount: number;
};

export type FeedCommentData = {
  type: 'FEED_COMMENT';
  feedId: string;
  actor: Actor;
};

export type FeedReplyData = {
  type: 'FEED_REPLY';
  feedId: string;
  actor: Actor;
};

export type FeedMentionData = {
  type: 'FEED_MENTION';
  feedId: string;
  actor: Actor;
};

export type PostCommentData = {
  type: 'POST_COMMENT';
  postId: string;
  actor: Actor;
};

export type PostReplyData = {
  type: 'POST_REPLY';
  postId: string;
  actor: Actor;
};

export type PostMentionData = {
  type: 'POST_MENTION';
  postId: string;
  actor: Actor;
};

export type NotificationData =
  | FollowData
  | FeedLikeData
  | FeedCommentData
  | FeedReplyData
  | FeedMentionData
  | PostCommentData
  | PostReplyData
  | PostMentionData;
