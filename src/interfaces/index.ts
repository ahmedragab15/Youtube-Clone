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

// export interface IChannel {
//   id: string;
//   kind: string;
//   snippet: {
//     title: string;
//     description: string;
//     customUrl?: string;
//     publishedAt: string;
//     thumbnails: {
//       default: { url: string };
//       medium: { url: string };
//       high: { url: string };
//     };
//     channelTitle?: string;
//     localized: {
//       title: string;
//       description: string;
//     };
//   };
//   brandingSettings: {
//     image: {
//       bannerExternalUrl: string;
//     };
//     channel: {
//       title: string;
//       description: string;
//       keywords: string;
//       country: string;
//       unsubscribedTrailer: string;
//     };
//   };
//   contentDetails: {
//     relatedPlaylists: {
//       uploads: string;
//       likes: string;
//     };
//   };
//   statistics?: {
//     viewCount: string;
//     subscriberCount: string;
//     hiddenSubscriberCount: boolean;
//     videoCount: string;
//   };
// }