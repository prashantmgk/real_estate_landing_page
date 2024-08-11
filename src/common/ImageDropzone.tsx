import React from 'react';
import { Group, Text, rem } from '@mantine/core';
import { MdUpload, MdPhoto } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';


export function ImageDropzone({ setFiles }: { setFiles: (files: (prevFiles: FileWithPath[]) => FileWithPath[]) => void }) {
   return (
      <Dropzone
         className='border-dashed border-2 bg-slate-100 border-gray-300 rounded-lg w-full cursor-pointer'
         onDrop={(newFiles) => setFiles((prevFiles: FileWithPath[]): FileWithPath[] => {
            if (prevFiles.length + newFiles.length <= 5) {
               return [...prevFiles, ...newFiles];
            } else {
               console.log("cant add more than 5 files");
               return prevFiles;
               //TODO: add a toaster message
            }
         })}
         onReject={(files) => console.log('rejected files', files)}
         maxSize={2 * 1024 ** 2}
         accept={IMAGE_MIME_TYPE}
      >
         <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
            <Dropzone.Accept>
               <MdUpload
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
               />
            </Dropzone.Accept>
            <Dropzone.Reject>
               <RxCross2
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
               />
            </Dropzone.Reject>
            <Dropzone.Idle>
               <MdPhoto
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
               />
            </Dropzone.Idle>

            <div>
               <Text size="xl" inline>
                  Drag images here or click to select files
               </Text>
               <Text size="xs" c="dimmed" inline mt={10}>
                  Attach as many files as you like, each file should not exceed 2MB
               </Text>
            </div>
         </Group>
      </Dropzone >
   );
}