export type NotificationType =
  | 'FOLLOW'
  | 'FEED_LIKE'
  | 'FEED_COMMENT'
  | 'FEED_ANSWER'
  | 'FEED_MENTION'
  | 'POST_COMMENT'
  | 'POST_ANSWER'
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

export type FeedAnswerData = {
  type: 'FEED_ANSWER';
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

export type PostAnswerData = {
  type: 'POST_ANSWER';
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
  | FeedAnswerData
  | FeedMentionData
  | PostCommentData
  | PostAnswerData
  | PostMentionData;
