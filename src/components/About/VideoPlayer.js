import { Box } from "@chakra-ui/react";
import introVideo from '../../assets/videos/intro.mp4';
export const VideoPlayer = () => (
    <Box>
        <video autoPlay loop muted controls disablePictureInPicture disableRemotePlayback
            controlsList="nodownload nofullscreen noremoteplayback"
            src={introVideo}
        />
    </Box>
);