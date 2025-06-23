export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://storage.bunnycdn.com/divine-dev-snapcast",
  CDN_URL: "https://divine-dev-snap-cast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-6df76ccd-98a.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id:"1",
    title:"SnapChat Message",
    thumbnail:"/assets/samples/thumbnail (1).png",
    userImg:"/assets/images/david.png",
    username:"Jason",
    createdAt:new Date("2025-05-01"),
    views:10,
    visibility:"public",
    duration:156
  },
  {
    id:"2",
    title:"Product Demo Walkthrough",
    thumbnail:"/assets/samples/thumbnail (2).png",
    userImg:"/assets/images/emily.png",
    username:"Sarah",
    createdAt:new Date("2025-04-15"),
    views:245,
    visibility:"public",
    duration:320
  },
  {
    id:"3",
    title:"Bug Report Analysis",
    thumbnail:"/assets/samples/thumbnail (3).png",
    userImg:"/assets/images/jason.png",
    username:"Michael",
    createdAt:new Date("2025-04-22"),
    views:87,
    visibility:"private",
    duration:210
  },
  {
    id:"4",
    title:"Team Meeting Highlights",
    thumbnail:"/assets/samples/thumbnail (4).png",
    userImg:"/assets/images/jessica.png",
    username:"Emily",
    createdAt:new Date("2025-03-30"),
    views:132,
    visibility:"public",
    duration:480
  },
  {
    id:"5",
    title:"UI Design Feedback",
    thumbnail:"/assets/samples/thumbnail (5).png",
    userImg:"/assets/images/lisa.png",
    username:"David",
    createdAt:new Date("2025-04-05"),
    views:198,
    visibility:"private",
    duration:275
  },
  {
    id:"6",
    title:"Quick Tutorial: New Features",
    thumbnail:"/assets/samples/thumbnail (6).png",
    userImg:"/assets/images/michael.png",
    username:"Jessica",
    createdAt:new Date("2025-05-10"),
    views:302,
    visibility:"public",
    duration:185
  },
  {
    id:"7",
    title:"Project Status Update",
    thumbnail:"/assets/samples/thumbnail (7).png",
    userImg:"/assets/images/sarah.png",
    username:"Robert",
    createdAt:new Date("2025-04-28"),
    views:156,
    visibility:"private",
    duration:240
  },
  {
    id:"8",
    title:"Customer Feedback Session",
    thumbnail:"/assets/samples/thumbnail (8).png",
    userImg:"/assets/images/jason.png",
    username:"Amanda",
    createdAt:new Date("2025-03-15"),
    views:215,
    visibility:"public",
    duration:360
  }
];
