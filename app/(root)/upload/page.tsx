"use client";

import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from '@/constants';
import { getThumbnailUploadUrl, getVideoUploadUrl, saveVideoDetails } from '@/lib/actions/video';
import { useFileInput } from '@/lib/hooks/useFileInput';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

const uploadFileToBunny = (file: File, uploadUrl: string, accessKey: string): Promise<void> => {
  
    console.log("ANDY - 1 file - " + file)
    console.log("ANDY - 2 access key - " + accessKey)
    console.log("ANDY - 3 upload url - " + uploadUrl)

  return fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
      AccessKey: accessKey,
    },
    body: file
  }).then((response) => {
    if (!response.ok) throw new Error('Upload failed')
  })
}

const Page = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    visibility: 'public',
  });

  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

  useEffect(() => {
    if (video.duration !== null || 0) {
      setVideoDuration(video.duration)
    }
  }, [video.duration])

  const [error, setError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      if (!video.file || !thumbnail.file) {
        setError('Please upload video and thumnail');
        return;
      }

      if (!formData.title || !formData.description) {
        console
        setError('Please fill in all the details');
        return;
      }

      // Upload the video to Bunny
      // [1] Get upload url
      const {
        videoId,
        uploadUrl: videoUploadUrl,
        accessKey: videoAccessKey
      } = await getVideoUploadUrl();

      if (!videoUploadUrl || !videoAccessKey) throw new Error('Failed to get video upload credentials');

      // [2] Upload the video to Bunny
      await uploadFileToBunny(video.file, videoUploadUrl, videoAccessKey);


      // Upload the thumbnail to DB
      const {
        uploadUrl: thumbnailUploadUrl,
        accessKey: thumbnailAccessKey,
        cdnUrl: thumbnailCdnUrl
      } = await getThumbnailUploadUrl(videoId);

      if (!thumbnailUploadUrl || !thumbnailCdnUrl || !thumbnailAccessKey) throw new Error('Failed to get thumbnail upload credentials')

      // Attach thumbnail
      await uploadFileToBunny(thumbnail.file, thumbnailUploadUrl, thumbnailAccessKey);

      // Create a new DB entry for the video details (urls, data)
      await saveVideoDetails({
        videoId,
        thumbnailUrl: thumbnailCdnUrl,
        ... formData,
        duration: videoDuration
      })

      router.push(`/video/${videoId}`)

    } catch (error) {
      console.log('Error submitting form: ', error)
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className='wrapper-md upload-page'>
      <h1>Upload a video</h1>

      {error && <div className='error-field'>{error}</div>}

      <form className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5' onSubmit={handleSubmit}>
        <FormField 
          id="title"
          label="Title"
          placeholder="Enter a clear and concise video title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <FormField 
          id="description"
          label="Desciption"
          placeholder="Description what this video is about"
          value={formData.description}
          as="textarea"
          onChange={handleInputChange}
        />

        <FileInput 
          id="video"
          label="video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />

        <FileInput 
          id="thumbnail"
          label="thumbnail"
          accept="imagethumbnail/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />
        
        <FormField 
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          as="select"
          options={[
            {value: 'public', label: 'Public '},
            {value: 'private', label: 'Private '},
          ]}
          onChange={handleInputChange}
        />

          <button type='submit' disabled={isSubmitting} className='submit-button'>
            {isSubmitting ? 'Uploading ...' : 'Upload video'}
          </button>
      </form>
    </div>
  )
}

export default Page