import { cn } from "@/lib/utils";
import {
  MediaController,
  MediaControlBar, 
  MediaPlayButton, 
  MediaFullscreenButton,
} from "media-chrome/dist/react";

export default function VideoCard({ video, className }: {video: string, className?: string } ) {
  return (
    <div className={cn("aspect-video my-5", className )}>
      <MediaController>
        <video
          slot="media"
          src={video} 
          preload="auto"
          muted
          crossOrigin=""
          autoPlay
          loop
        />
        <MediaControlBar>
          <MediaPlayButton></MediaPlayButton>
          <MediaFullscreenButton></MediaFullscreenButton> 
        </MediaControlBar>
      </MediaController>
    </div>
  );
}
