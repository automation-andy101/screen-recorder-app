"use client";

import Image from "next/image";
import {ICONS} from "@/constants";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useScreenRecording } from "@/lib/hooks/useScreenRecording";


const RecordScreen = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const { 
        recordedBlob,
        recordedVideoUrl,
        recordingDuration,
        startRecording,
        stopRecording,
        resetRecording    
    } = useScreenRecording();

    const closeModal = () => {
        resetRecording();
        setIsOpen(false);
    }

    return (
        <div className="record">
            <button className="primary-btn" onClick={() => setIsOpen(true)}>
                <Image src={ICONS.record} alt="record" width={16} height={16} />
                <span>Record a video</span>
            </button>
            {isOpen && (
                <section className="dialog">
                    <div className="overlay-record" onClick={}>

                    </div>
                </section>
            )}
        </div> 
    )
}

export default RecordScreen