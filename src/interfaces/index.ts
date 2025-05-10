export interface IVideos {
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
  };
  kind: string;
  statistics?: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  }
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
        height: number;
        width: number;
      };
      high: {
        url: string;
        height: number;
        width: number;
      };
      medium: {
        url: string;
        height: number;
        width: number;
      };
    };
  };
}
